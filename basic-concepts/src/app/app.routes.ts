import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RootComponentComponent } from './router-basics/components/root-component/root-component.component';
import { PageNotFoundComponent } from './router-basics/components/page-not-found/page-not-found.component';
import { TestComponent } from './router-basics/components/test/test.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent
    // },
    // {
    //     path: '',
    //     component: RootComponentComponent
    // },
    {
        path: '',
        redirectTo: '/test',
        pathMatch:'full'
    },
    {
        path: 'module1',
        loadChildren: () => import('./router-basics/router-basics.module').then(m => m.RouterBasicsModule)
    },
    {
        path: 'test',
        component: TestComponent,
        pathMatch: 'prefix',
        children:[
            {
                path: 'mod1',
                loadChildren: () => import('./router-basics/module1-pathmatch/module1-pathmatch.module').then(m => m.Module1PathmatchModule)
              },
              {
                path: 'mod3',
                loadChildren: () => import('./router-basics/module2-pathmatch/module2-pathmatch.module').then(m => m.Module2PathmatchModule)
              },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
