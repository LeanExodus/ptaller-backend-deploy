'use strict';
const { v4: uuidv4 } = require('uuid');
const { ImgurClient } = require('imgur')
var fs = require('fs');
/**
 *  custom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custom.custom', ({ strapi }) => ({
    async uploadImage(ctx) {
        try {
            const uuid = uuidv4();
            const filePath = ctx.request.files.Image.path

            const client = new ImgurClient({ clientId: '41443c4f2901744', clientSecret: '63610d6e3d4063397e7a925569fc08a7f7142405' })

            const response = await client.upload({
                image: fs.createReadStream(filePath),
                type: 'stream',
                title: uuid
              });

              return {'url':response.data.link}

        } catch (err) {
            ctx.badRequest("Post report controller error", { moreDetails: err });
            console.log(err)
        }
    },
}));
