import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path:'directives-pipes',
        loadChildren: () => import('./core-directives-pipes/core-directives-pipes.module').then(m => m.CoreDirectivesPipesModule)
    },
    {
        path: 'template-query',
        loadChildren: () => import('./template-querying/template-querying.module').then(m => m.TemplateQueryingModule)
    },
    {
        path: 'content-projection',
        loadChildren: () => import('./content-projection/content-projection.module').then(m => m.ContentProjectionModule)
    },
    {
        path: 'templates',
        loadChildren: () => import('./angular-templates/angular-templates.module').then(m => m.AngularTemplatesModule)
    },
    {
        path: 'directives',
        loadChildren: () => import('./angular-directives/angular-directives.module').then(m => m.AngularDirectivesModule)
    },
    {
        path: 'encapsulation',
        loadChildren: () => import('./encapsulation/encapsulation.module').then(m => m.EncapsulationModule)
    }
];
