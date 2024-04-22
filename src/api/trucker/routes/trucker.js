'use strict';

/**
 * trucker router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trucker.trucker');
