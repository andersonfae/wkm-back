/**
 * pessoa controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::pessoa.pessoa",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.service("api::pessoa.pessoa").findOne(id, {
        populate: ["Cidade", "Estado"], // Populando Cidade e Estado
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
