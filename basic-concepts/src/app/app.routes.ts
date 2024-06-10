import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'intro',
        loadChildren: () => import('./intro-rxjs/intro-rxjs.module').then(m => m.IntroRxjsModule)
    },
    {
        path: 'operators',
        loadChildren: () => import('./operators-rxjs/operators-rxjs.module').then(m => m.OperatorsRxjsModule)
    }
];
