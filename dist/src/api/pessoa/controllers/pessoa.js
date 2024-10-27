"use strict";
/**
 * pessoa controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::pessoa.pessoa", ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.service("api::pessoa.pessoa").findOne(id, {
            populate: ["Cidade", "Estado"], // Populando Cidade e Estado
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
}));
