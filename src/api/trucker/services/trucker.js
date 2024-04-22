'use strict';

/**
 * trucker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trucker.trucker');
