'use strict';

/**
 * customer-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-log.customer-log');
