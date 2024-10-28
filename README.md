# Cadastro de Pessoas - Backend

[![Strapi](https://img.shields.io/badge/Strapi-4.0.0-orange)](https://strapi.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.0-blue)](https://www.postgresql.org)

Um backend desenvolvido com **Strapi V5** que fornece uma API RESTful para o cadastro e gerenciamento de pessoas, incluindo informações como nome, email, estado e cidade.

## Table of Contents

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Configuração de Modelos](#configuração-de-modelos)
- [Como Usar](#como-usar)

## Funcionalidades

- **Modelos de Dados:** Estruturas para gerenciar informações de Pessoas, Cidades e Estados.
- **APIs RESTful:** Endpoints para criação, leitura, atualização e exclusão (CRUD) de pessoas, estados e cidades.
- **Validações:** Garantia de integridade dos dados através de validações no lado do servidor.
- **Autenticação:** Controle de acesso para operações sensíveis, permitindo apenas usuários autorizados para certas ações.

## Tecnologias Utilizadas

- **Backend:** Strapi V5
- **Banco de Dados:** PostgreSQL
- **Deployment:** Vercel (ou outra plataforma de sua escolha)

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou Yarn
- PostgreSQL (instalado e em execução)

### Passos para Inicialização

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend
```
2. **Instale as dependências:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend
```
3. **Configure as variáveis de ambiente:**
```bash
Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias para conectar ao banco de dados, como:
Possui o .env.example com o cadastro do Database que criei na vercel para facilitar o teste.
```
4. *Inicie a aplicação:*
```bash
npm run develop
# ou
yarn develop
```
5. *Acesse o painel de administração do Strapi:*
```bash
Abra o navegador e vá para http://localhost:1337/admin para configurar os modelos e gerenciar os dados.
```

## Configuração de Modelos
Pessoa: Modelo para armazenar informações de pessoas com os campos: Nome, Email, Cidade (relação), Estado (relação).
Cidade: Modelo para armazenar informações de cidades.
Estado: Modelo para armazenar informações de estados.

## Como Usar
Após iniciar o backend, você pode usar ferramentas como Postman ou Insomnia para interagir com a API.
Os endpoints disponíveis incluem:
POST /api/pessoas: Para criar uma nova pessoa.
GET /api/pessoas: Para listar todas as pessoas.
GET /api/pessoas/{id}: Para obter os detalhes de uma pessoa específica.
PUT /api/pessoas/{id}: Para atualizar uma pessoa existente.
DELETE /api/pessoas/{id}: Para deletar uma pessoa.

