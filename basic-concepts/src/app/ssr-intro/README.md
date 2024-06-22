## Rendering Engine

In angular, each component have separate template, css and ts files. When we route to specific path, the rendering engine combines all these files to create a html to show data in browser. It can be done at server side or at client side.

PHP - it is always server side 
vuejs, react, angular - by default it is client side, it uses Javascript Runtime Engine. It calls API to get data from DB and then combine it with html and css to create actual view.

## Angular Universal
Angular rendering engine that allows angular application to render on the server instead of client. We can use it at build time to pre-render he application multiple routes and serve those directly as plain html.
Node based rendering engine for angular which can be used for server side rendering and build time pre-rendering of an application.

Benefits -
Improving performance of the application
SEO

Performance enhancement -
By default angular loads application on client side, in client side rendering it initially shows blank page till js and css bundle gets load. On mobile or low power devices it might take more than 10 sec and its not good considering user experience.
But when we use server side rendering blank page will be shown for very short time, as it gets load on server so it improves FCP and also reduces initial load time.
We can do pre-rendering as well using universal for multiple routes. It will generate html for different routes and then we can store it in file system and then we can deploy it on web server. Then web server will serve all those pages as static pages just like index.html [ here we will be using universal at build time ]

Social Media Crawlers - e.g. twitter twit
Social media crawlers like twitter, facebook crawls a page content to show some main content about the page. For this it needs some html to be loaded to get content from it to show the same. In angular by default we use client side rendering so initially it loads just a blank page and not actual content. In this social media crawlers unable to get content from it, because content gets load at runtime. Social media crawlers are currently not compatible with Javascript, it needs html pages that directly gets rendered on server. So by using universal we can load some html directly on server, but for doing this there must be some information that we can show users without authentication or without login. If sites do not expose any content without authentication in that scenario soscial media crawlers unable to get any data.

SEO -
Search engines also have crawlers, which get some important content of website and add it to the search engine index and list the page in related search results. Today most of the search engines are capable to fetch information from JS heavy pages and don't need sever side rendering. But some engines like baidu search engine which is not capable to fetch data from JS pages it needs html pages directly from server. As most of the search engines are capable to fetch data from SPAs and JS heavy pages, we rarely use SSR for SEO, but it is very beneficial to enhance performance and for social media crawlers like twitter, facebook.

## Setting up SSR in angular application

In angular 17, we can add SSR while creating a new project. When we add SSR then actually our application consists 2 separate appplication one is server side (main.server.ts) and other one is client side (main.ts)

package.json -
"build": "ng build" - build both client side and server side applications
"start": "ng serve" - run client side application
"serve:ssr:angular-concepts": "node dist/angular-concepts/server/server.mjs" - run server side application

When we use last command we serve the application on server. Server side rendering used to render just initial payload, once first page gets load and we route somewhere then it loads on client side. SSR reduces initial load time we can check the same in network tab 'load time'

## server.ts

It uses Node Express server.

const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
Setting up port and running server.

server.get('/api/**', (req, res) => { });
Creating and serving own APIs

server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));
Serves static files

server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });
Serving all other angular routes

Hydration -
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
provideClientHydration() - It allows client side rendering and server side rendering collaborate with each other, so at client side rendering APIs will not be called again which were called in server side rednering. It also reduces flickering effect when we reload the application and improves user experience. Also it improves lighthouse score i.e. enhances performance.

## Note
Server side application is only used at the build time, it is not used at runtime.



 

