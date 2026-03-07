import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products').then(m => m.Products)
    }
];
