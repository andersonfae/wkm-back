/**
 * estado controller
 */

"use strict";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::estado.estado",
  ({ strapi }) => ({
    async delete(ctx) {
      const { id } = ctx.params;

      // Verificar se há cidades associadas ao estado
      const cidadesCount = await strapi.db
        .query("api::cidade.cidade")
        .count({ where: { estado: id } });

      // Se houver cidades associadas, retorne um erro
      if (cidadesCount > 0) {
        return ctx.badRequest(
          "Este estado não pode ser removido porque há cidades associadas a ele."
        );
      }

      // Se não houver associações, continue com a exclusão
      const entity = await strapi.entityService.delete(
        "api::estado.estado",
        id
      );
      return entity;
    },
  })
);
