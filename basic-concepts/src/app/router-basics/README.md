##

SPA - better UX and improves performance
used where we want user to login to access data

SPA - When we load website first time its html gets loaded from server. But actual content we need to show which will get handled at client side using JS using REST APIs. e.g. angular.io
In multipage application when we change route, it gets loaded from server so user need to wait till it get loaded. e.g. wikipedia

SPAs advantages:
Improved performance
Improved user experience
Private portal - need to login, or need to get membership

SPAs disadvantages:
If they are not server side rendered then it will not properly indexed b some browsers. e.g. bing search engine will not be able to index it properly

## 

<router-outlet></router-outlet> it is a directive of Router Module

routerLink='path' 
[routerLink] = 'path'

routerLink = '/path' --- this is absolute path
routerLink = 'path' --- this is relative path

routerLinkActive='class_name' --- if menu selected then we can show different css

##

In lazy loading, seperate js bundle will get created for that module and will get loaded when we route to specific path. By doing this it reduces main js bundle size and also reduces initial load time.

Lazy loading:
{
	path:'',
	loadChildren: () => import('./').then(m => m.modulename)
}
import('./') --- here we are getting promise

forRoot --- for root module of the application
forChild --- meant for any child modules lazy loaded or not, they have there own routes

##

root route - it should be defined very first in routes array
{
    path: '',
    redirectTo: '/route_path',
    pathMatch: 'full'    
}
With pathmatch full Angular checks the full path is matches, if it matches then only it redirects.
By default value of pathMatch is prefix, it will not work in above case.

wildcard route - it should be defined at the last in routes array
{
    path: '**',
    component: component_name
}

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
With child routes, pathMatch full will not work. It should be prefix.

