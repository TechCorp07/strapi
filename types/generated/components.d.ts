import type { Schema, Struct } from '@strapi/strapi';

export interface AboutStat extends Struct.ComponentSchema {
  collectionName: 'components_about_stats';
  info: {
    description: 'Company statistic';
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutValue extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    description: 'Core company value';
    displayName: 'Value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'award',
        'trending-up',
        'shield',
        'users',
        'target',
        'globe',
        'heart',
        'star',
      ]
    > &
      Schema.Attribute.DefaultTo<'award'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BenefitResult extends Struct.ComponentSchema {
  collectionName: 'components_benefit_results';
  info: {
    description: 'Individual result or metric for a benefit case study';
    displayName: 'Result';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    metric: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyMetric extends Struct.ComponentSchema {
  collectionName: 'components_case_study_metrics';
  info: {
    description: 'Single metric with label and value';
    displayName: 'Metric';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_info';
  info: {
    description: 'Contact information for footer with primary and secondary options';
    displayName: 'Contact Info';
  };
  attributes: {
    businessHours: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Mon-Fri: 8AM - 6PM EAT'>;
    officeLocation: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Nairobi, Kenya'>;
    primaryEmail: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'info@peakpoint.africa'>;
    primaryPhone: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'+254 XXX XXX XXX'>;
    regionLocation: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'East Africa'>;
    secondaryEmail: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'sales@peakpoint.africa'>;
    secondaryPhone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+1 XXX XXX XXXX (US)'>;
    supportAvailability: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'24/7 Support Available'>;
  };
}

export interface FooterIndustryColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_industry_columns';
  info: {
    description: 'Footer industry column with services';
    displayName: 'Industry Column';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Component<'footer.service-link', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_service_links';
  info: {
    description: 'Footer service link';
    displayName: 'Service Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    description: 'Social media links for footer';
    displayName: 'Social Links';
  };
  attributes: {
    facebook: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://facebook.com/peakpoint'>;
    linkedin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://linkedin.com/company/peakpoint'>;
    twitter: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://twitter.com/peakpoint'>;
    whatsapp: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://whatsapp.com/channel/peakpoint'>;
    youtube: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://youtube.com/@peakpoint'>;
  };
}

export interface HomepageBenefit extends Struct.ComponentSchema {
  collectionName: 'components_homepage_benefits';
  info: {
    description: 'Individual benefit item with case study details';
    displayName: 'Benefit';
  };
  attributes: {
    additionalImages: Schema.Attribute.Media<'images', true>;
    caseStudySubtitle: Schema.Attribute.String;
    caseStudyTitle: Schema.Attribute.String;
    challenge: Schema.Attribute.RichText;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    impact: Schema.Attribute.String;
    industryInsight: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    results: Schema.Attribute.Component<'benefit.result', true>;
    solution: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoUrl: Schema.Attribute.String;
  };
}

export interface HomepageBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_benefits_sections';
  info: {
    description: 'Benefits carousel section';
    displayName: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'homepage.benefit', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Why Choose Peak Point'>;
  };
}

export interface HomepageHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_slides';
  info: {
    description: 'Individual hero slider slide';
    displayName: 'Hero Slide';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_industries_sections';
  info: {
    description: 'Industries section with title and industries';
    displayName: 'Industries Section';
  };
  attributes: {
    industries: Schema.Attribute.Component<'homepage.industry', true>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Industries We Serve'>;
  };
}

export interface HomepageIndustry extends Struct.ComponentSchema {
  collectionName: 'components_homepage_industries';
  info: {
    description: 'Individual industry with services';
    displayName: 'Industry';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'heart',
        'graduation-cap',
        'building',
        'smartphone',
        'briefcase',
        'cpu',
        'database',
        'globe',
        'shield',
        'truck',
        'factory',
        'store',
      ]
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subServices: Schema.Attribute.Component<'homepage.sub-service', true>;
  };
}

export interface HomepageMetric extends Struct.ComponentSchema {
  collectionName: 'components_homepage_metrics';
  info: {
    description: 'Individual metric/statistic';
    displayName: 'Metric';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['globe', 'users', 'award', 'trending-up', 'target', 'shield']
    > &
      Schema.Attribute.DefaultTo<'award'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    suffix: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'+'>;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface HomepagePartner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_partners';
  info: {
    description: 'Partner or certification logo';
    displayName: 'Partner';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    website: Schema.Attribute.String;
  };
}

export interface HomepageSubService extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sub_services';
  info: {
    description: 'Sub-service item';
    displayName: 'Sub Service';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactFocusArea extends Struct.ComponentSchema {
  collectionName: 'components_impact_focus_areas';
  info: {
    description: 'Domain or sector focus';
    displayName: 'focus-area';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactHero extends Struct.ComponentSchema {
  collectionName: 'components_impact_heroes';
  info: {
    description: 'Hero section for impact story';
    displayName: 'Impact Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactMetric extends Struct.ComponentSchema {
  collectionName: 'components_impact_metrics';
  info: {
    description: 'Key impact metrics and statistics';
    displayName: 'Impact Metric';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactProblemStatement extends Struct.ComponentSchema {
  collectionName: 'components_impact_problem_statements';
  info: {
    description: 'The problem we are addressing';
    displayName: 'problem-statement';
  };
  attributes: {
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactSdg extends Struct.ComponentSchema {
  collectionName: 'components_impact_sdgs';
  info: {
    description: 'Sustainable Development Goal alignment';
    displayName: 'sdg';
  };
  attributes: {
    details: Schema.Attribute.Text;
    goal: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactSolution extends Struct.ComponentSchema {
  collectionName: 'components_impact_solutions';
  info: {
    description: 'Our solution overview';
    displayName: 'solution';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactTheoryOfChange extends Struct.ComponentSchema {
  collectionName: 'components_impact_theory_of_changes';
  info: {
    description: 'Logic from inputs to outcomes';
    displayName: 'theory-of-change';
  };
  attributes: {
    narrative: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface NavigationCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_cta_buttons';
  info: {
    description: 'Call-to-action button configuration';
    displayName: 'CTA Button';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/contact'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get Started'>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: 'Navigation menu item with label and link';
    displayName: 'Menu Item';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface PartnershipsOpportunity extends Struct.ComponentSchema {
  collectionName: 'components_partnerships_opportunities';
  info: {
    description: 'Partnership opportunity card';
    displayName: 'Partnership Opportunity';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.list-item', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\uD83E\uDD1D'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnershipsReason extends Struct.ComponentSchema {
  collectionName: 'components_partnerships_reasons';
  info: {
    description: 'Reason to partner';
    displayName: 'Partnership Reason';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\uD83D\uDCCA'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnershipsStep extends Struct.ComponentSchema {
  collectionName: 'components_partnerships_steps';
  info: {
    description: 'Partnership process step';
    displayName: 'Partnership Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceServiceDetail extends Struct.ComponentSchema {
  collectionName: 'components_service_service_details';
  info: {
    description: 'Detailed service information with features';
    displayName: 'Service Detail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    description: 'Simple list item';
    displayName: 'List Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.stat': AboutStat;
      'about.value': AboutValue;
      'benefit.result': BenefitResult;
      'case-study.metric': CaseStudyMetric;
      'footer.contact-info': FooterContactInfo;
      'footer.industry-column': FooterIndustryColumn;
      'footer.service-link': FooterServiceLink;
      'footer.social-links': FooterSocialLinks;
      'homepage.benefit': HomepageBenefit;
      'homepage.benefits-section': HomepageBenefitsSection;
      'homepage.hero-slide': HomepageHeroSlide;
      'homepage.industries-section': HomepageIndustriesSection;
      'homepage.industry': HomepageIndustry;
      'homepage.metric': HomepageMetric;
      'homepage.partner': HomepagePartner;
      'homepage.sub-service': HomepageSubService;
      'impact.focus-area': ImpactFocusArea;
      'impact.hero': ImpactHero;
      'impact.metric': ImpactMetric;
      'impact.problem-statement': ImpactProblemStatement;
      'impact.sdg': ImpactSdg;
      'impact.solution': ImpactSolution;
      'impact.theory-of-change': ImpactTheoryOfChange;
      'navigation.cta-button': NavigationCtaButton;
      'navigation.menu-item': NavigationMenuItem;
      'partnerships.opportunity': PartnershipsOpportunity;
      'partnerships.reason': PartnershipsReason;
      'partnerships.step': PartnershipsStep;
      'service.service-detail': ServiceServiceDetail;
      'shared.list-item': SharedListItem;
    }
  }
}
