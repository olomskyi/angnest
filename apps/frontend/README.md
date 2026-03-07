# frontend / Angular

## Generating

```sh
https://nx.dev/docs/technologies/angular/introduction

nx add @nx/angular
nx g @nx/angular:app apps/frontend

# tailwind-css / daisyui
https://nx.dev/docs/technologies/angular/guides/using-tailwind-css-with-angular-projects
https://angular.dev/guide/tailwind
https://daisyui.com/components/

npm install -D tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17
npx tailwindcss@3.4.1 init -p
npm install -D daisyui@4.12.24

# Signals / Apollo
npm i @ngrx/signals apollo-angular

```

## Run

```sh
nx serve frontend
```

## Dev

```sh
# Header
angnest\apps\frontend\src\app>nx g c components/header/header
# Products screen
angnest\apps\frontend\src\app>nx g c components/products/products


```