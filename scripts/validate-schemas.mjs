import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const API_ROOT = path.join(ROOT, "src", "api");
const CMP_ROOT = path.join(ROOT, "src", "components");

function getAll(p, endsWith) {
  const out = [];
  const walk = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (full.endsWith(endsWith)) out.push(full);
    }
  };
  if (fs.existsSync(p)) walk(p);
  return out;
}

const componentExists = (name) => {
  // "about.stat" -> src/components/about/stat.json
  const [cat, comp] = name.split(".");
  const p = path.join(CMP_ROOT, cat, `${comp}.json`);
  return fs.existsSync(p);
};

let ok = true;
const schemas = getAll(API_ROOT, path.join("content-types", "schema.json"));
for (const file of schemas) {
  const j = JSON.parse(fs.readFileSync(file, "utf-8"));
  if (typeof j.attributes !== "object" || Array.isArray(j.attributes)) {
    ok = false;
    console.error("❌ attributes must be an object:", file);
  }
  if (!["collectionType", "singleType"].includes(j.kind)) {
    ok = false;
    console.error("❌ invalid kind:", j.kind, "in", file);
  }
  // Check components
  for (const [k, v] of Object.entries(j.attributes || {})) {
    if (v?.type === "component") {
      if (!componentExists(v.component)) {
        ok = false;
        console.error(`❌ missing component "${v.component}" used by "${k}" in`, file);
      }
    }
  }
}
console.log(ok ? "✅ All schemas look fine." : "⚠️ Issues found.");
