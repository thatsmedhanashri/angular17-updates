import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'intro',
        loadChildren: () => import('./ssr-intro/ssr-intro.module').then(m => m.SsrIntroModule)
    }
];
