'use strict';

/**
 * custom router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes: [
      {
        method: "POST",
        path: "/uploadImage",
        handler: "custom.uploadImage",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
