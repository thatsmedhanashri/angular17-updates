##
@AppModule() decorator is used to create angular module

## declarations
Every component, directives or pipes we have created that needs to declare here

## imports
If external module we need in our project that need to import here like BrowserModule, BrowserAnimationsModule, HttpClientModule, different material modules if we are using Material library for UI.

BrowserModule -> It consists of many in-built services of angular to render application in browser. It include series of in-built directives like nfIf, ngFor, etc.

BrowserAnimationsModule -> If we want to add animations into our application then we need to import this module.

## providers
If we create any service without tree shaking i.e. without providedIn: 'root' then we need to provide it in each component or if we want to provide it at the root of project then we can provide it in AppModule's providers.

## bootstrap
It is used to identify root component of application component tree. Application can have multiple components declared in index.html i.e. application can have multiple root components but that all need to add in bootstrap array.
But generally application have a single root component.

## exports
If we create our own module with some components, and that components want to use in another module then we need to add those components in exports.

## Custom Pipes

transform(value: unknown, ...args: unknown[]): unknown {
    return null;
}

We need to implement PipeTransform interface and modify transform function as per our requirement. 

## Pure Pipes
Pure pipes gets called only when input reference gets changed.
For example, if we are giving an array as input to pipe. If we directly change any property at specific position in an array then pipe will not get called and template will not update. But if we create a new array with updated data and assign it to existing array then pipe will get called and update the template.

## Impure Pipes
These pipes gets called on every change detection cycle. We can make pipe impure by adding setting pure parameter to false in pipe decorator.

@Pipe({
  name: 'customPipe',
  standalone: true,
  pure: false
})

We should avoid using impure pipes and if we are using it then the transform method login should be a lightweight, else it will degrade application's performace.

## Standalone components
Migrating existing components to standlone:
npx ng generate @angular/core:standalone

## main.ts and standalone components
We don't need to use AppModule if all components are standalone. So we bootstrap root component instead of AppModule.

platformBrowserDynamic().booststrapModule(AppModule)
  .catch(err => console.log(err))

Above line need to replace with:
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

appConfig:
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};

provideRouter(routes)
Sets up providers necessary to enable Router functionality for the application. Allows to configure a set of routes as well as extra features that should be enabled.

provideClientHydration()
Hydration is the process that restores the server side rendered application on the client. This includes things like reusing the server rendered DOM structures, persisting the application state, transferring application data that was retrieved already by the server, and other processes.

provideAnimationsAsync()
Imports BrowserAnimationsModule