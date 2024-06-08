## defer

We should use it if we want to enhance application performance. Usually the whole application bulndled into a single js file which is main.js and which gets load after bootstraping the application.
But if we use defer, then template inside the defer block lets say it is another component then it gets loaded seperately [sepearte js bundle will get created for that component] which will not be included in main.js. We can use defer if the the component is having heavy data and which don't need to load initially, we can load it in background and then we can show.

## @defer, @placeholder, @loading, @error

@defer 
Add a component into tis block if want to load it lazily.

@placeholder(minimum 3s)
Add a text or simple template which we want to show before actual data gets load and display. It's purpose is not loader functionality, it can be used to show some simple text and css.

The @placeholder will be eagerly loaded, just the content inside @defer will put in seperate js bundle. So it should not contain any heavy functionality.

@loading(minimum 2s; after 1s){}
@loading and @placeholder blocks are different. The content inside the placeholder block will get displayed until the content inside defer block is displayed. But the content inside loading block will get displayed until actual js bundle of template inside defer block is loading in the background.
Loading has 2 parameters, second parameter defines when loading block should be displayed. Here content inside the loading block will get displayed only if template inside defer block is taking more than 1 second to load. And once the content inside the loading block is displayed it will be visible for minimum 2 seconds which first parameter defines.

The content inside the error block will be displayed when we get an error while loading js bundle of the content inside the defer block. We can check it via inspect element choosing offline mode.
The content inside the placeholder, loading and error block loads eagerly.

## Various triggers of defer

@defer(on idle; prefetch on idle)
It get triggered when browser goes into idle state.

@defer(on immediate; prefetch on immediate)
It get triggered immediately when parent component loads.

@defer(on timer(15s); prefetch on idle)
It prefetches when browser goes into idle state, but the content inside the defer block will be shown 15 seconds after browser goes into idle state.

@defer(on timer(15s); prefetch timer(10s))
It prefetches 10 seconds browser goes into idle state, and the content inside the defer block will be shown 15 seconds browser goes into idle state.

@defer(on viewport; prefetch on idle) or @defer(on viewport(check); prefetch on idle)
It prefetches immediately, but will be shown when user scroll down.

@defer(on interaction(showcontent); prefetch on interaction(input1))
It prefetches the content when user interact with 'input1' element and the content will be shown when user interact with 'showcontent' element.

When we don't provide any element for viewport, interaction and hover trigger then by default it check for @placeholder block.

## Custom triggers

Use when instead of on
