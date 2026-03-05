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
cd ./apps/backend
npx prisma migrate dev

npm run backend:prisma:generate
npm run prisma:seed

```

## Run

```sh
nx serve backend
```