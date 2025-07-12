/**
 * content controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::content.content' , ({ strapi}) => ({
    async findOne(ctx) {
    const { id: slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::content.content', {
      filters: { Slug: slug },
      populate: '*'
    });

    if (!entity || entity.length === 0) {
      return ctx.notFound('Content not found');
    }

    return this.transformResponse(entity[0]);
  }
}));
