// import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},
  bootstrap({ strapi }) {const uids = Object.keys(strapi.contentTypes);
  },
};
