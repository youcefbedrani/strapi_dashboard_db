'use strict';

/**
 * image controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::image.image", ({ strapi }) => ({
  async findOne(ctx) {

    const { id } = ctx.params;

    const { results, pagination } = await strapi.db.query("api::image.image")
      .findOne(id);

    const sanitizedResults = await this.sanitizeOutput(results, ctx);
    return this.transformResponse(sanitizedResults, { pagination });
  }
}));
