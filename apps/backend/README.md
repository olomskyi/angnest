# Backend / Nest JS

## Generating

```sh
nx g @nx/nest:app apps/backend

# Shared Library
nx generate @nx/js:library shared

# Setup Prisma
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
npx prisma generate
/apps/backend> npx prisma migrate dev
npm install @prisma/adapter-pg pg
npm i --save-dev @types/pg
npm run backend:prisma:generate
npm run prisma:seed

# GraphQL
npm i @nestjs/graphql @nestjs/apollo @apollo/server @as-integrations/express5 graphql
/apps/backend/src/app>nx g resource products/products
http://localhost:3000/graphql

```

## Run

```sh
nx serve backend
```