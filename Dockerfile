# Usando uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta que o Strapi vai usar
EXPOSE 1337

# Comando para iniciar o Strapi
CMD ["npx", "@strapi/strapi", "develop"]

