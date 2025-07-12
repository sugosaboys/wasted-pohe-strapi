import type { Schema, Struct } from '@strapi/strapi';

export interface CalltoActionCta extends Struct.ComponentSchema {
  collectionName: 'components_callto_action_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Title: Schema.Attribute.String;
    URL: Schema.Attribute.Text;
  };
}

export interface CompositionFieldComposition extends Struct.ComponentSchema {
  collectionName: 'components_composition_field_compositions';
  info: {
    displayName: 'composition';
  };
  attributes: {
    Composition: Schema.Attribute.String;
    details: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ImageWithCaptionFollowTheWaste extends Struct.ComponentSchema {
  collectionName: 'components_image_with_caption_follow_the_wastes';
  info: {
    displayName: 'FollowTheWaste';
  };
  attributes: {
    caption: Schema.Attribute.String;
    captionFourth: Schema.Attribute.String;
    captionSecond: Schema.Attribute.String;
    captionThird: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageFourth: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ImageSecond: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ImageThird: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionHeroDescription extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_descriptions';
  info: {
    displayName: 'HeroDescription';
  };
  attributes: {
    TextDescription: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'callto-action.cta': CalltoActionCta;
      'composition-field.composition': CompositionFieldComposition;
      'image-with-caption.follow-the-waste': ImageWithCaptionFollowTheWaste;
      'section.hero-description': SectionHeroDescription;
    }
  }
}
