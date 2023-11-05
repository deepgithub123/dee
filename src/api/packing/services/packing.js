'use strict';

/**
 * packing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::packing.packing');
