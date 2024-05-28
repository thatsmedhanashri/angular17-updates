## Added angular material
npx ng add @angular/material
Implemented by Google, it is UI library which includes multiple in-built components easy to use.
Responsive - compatible with android, ios, tablets, laptops
We can customise it rewriting the css

## angular.json
The angular.json file at the root level of an Angular workspace provides workspace-wide and project-specific configuration defaults. These are used for build and development tools provided by the Angular CLI. Path values given in the configuration are relative to the root workspace directory.
css configuration, angular material configuration, test/build/serve commands configuration

## package.json
It contain all dependencies(Dependency, DevDependency and peerDependency) with version for the angular project. When we install any package through npm command it gets added into package.json
When you run npm install command then it will install all the node_modules listed under package.json. So you need to transfer code from one PC to other PC then no need to transfer all node_modules you just need proper package.json file and run npm install command.

## package-lock.json
package-lock. json to keep track of exact dependency trees at any given time. It will ensure that all clients that download your project and attempt to install dependencies will get the exact same dependency tree.
Checking dependency tree: npm ls --all
While package. json sets the stage with dependency listings and version ranges defined through semantic versioning or specific numbers, package-lock. json goes a step further by resolving and documenting the precise dependencies, sub-dependencies, and installation paths for accurate reproducibility.

## .gitignore
.gitignore tells git which files or folders it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, dist folder, node modules, etc.

## tsconfig.json
At the root tsconfig. json file specifies the base TypeScript and Angular compiler options that all projects in the workspace inherit.
target: the language used for the compiled output
module: the module manager used in the compiled output. system is for SystemJS, commonjs for CommonJS.
moduleResolution: the strategy used to resolve module declaration files (.d.ts files). With the node approach, they are loaded from the node_modules folder like a module (require('module-name'))

## tsconfig.app.json
The difference is that tsconfig.app.json is a file that is related to the Angular App in particular, while tsconfig.json is a more general file that contains general typescript configuration. It's especially useful when you have a micro frontends system, where there are multiple Angular subprojects, each of them with its own tsconfig.app.json configuration.
Actually it extends tsconfig.json, which means that the whole App uses the configuration stated in tsconfig.app.json plus the configuration in tsconfig.json.

## tsconfig.spec.json
It is used for environment configuration like which framework we are going to use for testing. Generally we use Jasmine framework in angular for testing. It also extends tsconfig.json

## launch.json
It is created by vs code under folder .vscode
A launch.json file is used to configure the debugger in Visual Studio Code. Visual Studio Code generates a launch.json (under a .vscode folder in your project) with almost all of the required information.
"configurations":
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200/"
    },

## tasks.json
It is created by vs code under folder .vscode
Tasks in VS Code can be configured to run scripts and start processes so that many of these existing tools can be used from within VS Code without having to enter a command line or write new code. Workspace or folder specific tasks are configured from the tasks.json file in the .vscode folder for a workspace.
"version": "2.0.0",
  "tasks":
    {
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "bundle generation complete"
          }
        }
      }
    },

## server.ts
The server. ts file configures a Node. js Express server and Angular server-side rendering. CommonEngine is used to render an Angular application.

## index.html
The index. html file is the entry point of an Angular application and it is responsible for loading the necessary JavaScript files and bootstrapping the Angular application.

## main.ts
In main.ts file last line platformBrowserDynamic().bootstrapModule(AppModule) responsible for bootstraping of angular application. platformBrowserDynamic() part of this line indicates that we are about to boot Angular in a browser environment.
The bootstrapModule() function helps bootstrap our root module taking in the root module as its argument. AppModule is our root module which is the entry module for our application, this can actually be any of the modules in our application but by convention AppModule is used as the root module.
.In our AppModule, we then need to specify the component that will serve as the entry point component for our application. In our app.module.ts file where we import the entry component (conventionally AppComponent) and supply it as the only item in our bootstrap array inside the NgModule configuration object. eg. bootstrap[AppComponent]

## Angular 17 and app.module.ts
By default Angular 17 creates a standalone app.
If you want to generate a new app without this feature use the next command: ng new NoStandaloneApp --standalone=false
This will create the app.module.ts file and at main.ts will use the platformBrowserDynamic.

## Which loads first index.html or main.ts?
You can tested it easily. Put console.log(1) in the index.html, and console.log(2) in main.ts. First console will be 1, so index.html runs first. When application is opened, initially index.html start to render and it will render with empty <app-root></app-root> - because Angular app is still to be loaded.
Angular encounters <app-root> in html before main.js/main.ts is loaded or executed, then why it doesn't throw any error or exception because if main.js is not loaded that means <app-root> is not defined yet.
Reason is, index.html is not an Angular template file, it is pure html, you can place any <xyz> element inside it and it will never throw an error. But for Angular template files, during compile time it checks if <xyz> is defined or not and throws compile time error if not defined.

## styles.scss
It is root level styles file.

## app.config.ts
The app. config. ts file is where you will set up your external dependencies, like the Angular router, by calling provideRouter(routes) in the providers array.

## .gitkeep
It is kept by git to ensure blank/empty directories are never added remotely when pushing changes. Git will only find .gitkeep entries in bare folders. Once Git sees a blank/empty folder with a gitkeep file, it'll add it to subsequent commits or pushes.
It is true that using a .gitkeep file is a bit of a hack, but there is no doubt that it is an effective solution. This is only a workaround to the problem since there is no direct fix at hand. As long as this file is present in a folder, it's not blank/empty, is it? Because the blank/empty folder is not really blank/empty, we are going to include it anyway. Despite its logical contradictions, this has become a commonly used convention for Git.

## Standalone Component
When we create new component in angular 17 it is by default standalone. The main benefit of standalone components is that they make it trivial to develop a fully lazy-loaded application, or migrate an existing application and make it fully lazy-loaded.