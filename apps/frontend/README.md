# frontend / Angular

## Generating

```sh
https://nx.dev/docs/technologies/angular/introduction

nx add @nx/angular
nx g @nx/angular:app apps/frontend

# tailwind-css
https://nx.dev/docs/technologies/angular/guides/using-tailwind-css-with-angular-projects
https://angular.dev/guide/tailwind

npm i -D tailwindcss postcss autoprefixer
npm i --save-dev daisyui@4.12.24
npx tailwindcss init -p

```

## Run

```sh
nx serve frontend
```

## Dev

```sh
# Header
angnest\apps\frontend\src\app>nx g c components/header/header


```