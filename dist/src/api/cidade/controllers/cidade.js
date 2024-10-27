/**
 * cidade controller
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::cidade.cidade", ({ strapi }) => ({
    async delete(ctx) {
        const { id } = ctx.params;
        const pessoasCount = await strapi.db
            .query("api::pessoa.pessoa")
            .count({ where: { cidade: id } });
        if (pessoasCount > 0) {
            return ctx.badRequest("Esta cidade não pode ser removida porque há pessoas associadas a ela.");
        }
        const entity = await strapi.entityService.delete("api::cidade.cidade", id);
        return entity;
    },
}));
