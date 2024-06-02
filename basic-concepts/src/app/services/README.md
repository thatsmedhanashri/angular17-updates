## async pipe

The async pipe in Angular is a built-in pipe that's used to automatically subscribe to an Observable or Promise and unwrap the data it emits within your template.
The async pipe simplifies the management of subscriptions and avoids memory leaks, as it automatically unsubscribes when the component is destroyed. It ensures that the latest data is displayed in the view without needing manual subscription handling or change detection.

## HttpClient

HttpClient is Angular's in-built service which is used to call REST APIs. 

Setting Headers:
const headers = new HttpHeaders()
                .set('Content-Type', 'application-json')

GET request, setting params:
const params = new HttpParams()
                .set('page','1')
                .set('pageSize','10')

## providedIn

@Injectable({
  providedIn: 'root'
})

providedIn: 'root' -> provides respective service as dependency in any component in working tree. It creates a single instance of the service and can be used in any module/component.

@Injectable()

If we remove it from @Injectable decorator, then we need to provide it in each module/component in providers array. So it will create multiple instances of the service when respective module/service gets load.

## Hierarchical DI

Suppose we want the service in parent component as well as in child component, but we provide the service only in parent component's providers. In this scenario child check for its own dependencies, if it is not available then it ask to parent for that dependency. So it will not give error and work properly.

When we provide service at component level, when component gets destroy the service instance also removed from the memory.

## Tree-Shekeable Providers

@Injectable({
  providedIn: 'root'
})

This a Tree-Shekeable approach. With this approach when we use it in any component the service will get load in the bundle only if it is used in that component, so this enhances the performance. We should use it in singleton services or it does not have any state.

We should use providers if the service contains component specific state data.

## @Optional() @Self() @SkipSelf()

@Optional() -> Make dependency optional

@Self() -> Get dependecy from component itself, not from parent component

@SkipSelf() -> Get dependency from parent component only even if it is provided in component itself

## @Host()

@Host() decorator makes Angular to look for the injector on the component itself, so in that regard it may look similar to the @Self() decorator. But that’s actually not the end: if the injector is not found there, it looks for the injector up to its host component.
We’ve been looking at a Component as our example, but we may just as well have a Directive here instead. In that case it can be used on a Component that defines its injector and that component would be the directive’s host.
Or we can have our KidComponent projected into ParentComponent(by that <ng-content></ng-content> thingy). Then we also say that our component is being hosted by ParentComponent — and if ParentComponent provides ToyService and KidComponent does not, the @Host() decorator of that inner component would still get that service’s instance.