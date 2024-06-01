## 

Each component has unique attribute style identifier
ex. ngcontent-c0
So by default the styles mentioned in components scss file are specifically for that component.

## :host

:host .class1 {
    padding: 50px;
    background-color: burlywood;
}
Is the part of angular's view encapsulation mechanism. It allows to target host element of the component. So if we write :host in app-home component's scss then it target <app-home/> html element.

## ::ng-deep

<app-child1>
    <p class="pNgDeep">Checking ng-deep with content projection</p>
</app-child1>

<p class="test">child1 works!</p>
<ng-content></ng-content>

::ng-deep .pNgDeep{
    background-color: aqua;
}
.test{
    background-color: blueviolet;
}

ng-deep bypasses the view encapsulation and applies whatever styles mentioned in the respective class. In above example we cannot directly apply styles to <p></p> tag which we are showing through content projection, we need to bypass view encapsulation here if we want to apply css from child1 component.

.padding1 ::ng-deep .pNgDeep{
    background-color: aqua;
}

The part of the css selector after ::ng-deep will no longer specific to that component, but the part of css selector before ::ng-deep will still specific to that component.

## :host-context()

<div class="theme1">
    <p class="test">home works!</p>
    <app-child1>
        <p class="pNgDeep">Checking ng-deep with content projection</p>
    </app-child1>
</div>

.theme1{
    border: solid 5px #aabbcc;
}

<p class="test">child1 works!</p>
<div class="padding1">
    <ng-content></ng-content>
</div>

:host-context(.theme1) .test{
    border: solid 10px #808080;
}

Sometimes it's useful to apply styles based on some condition outside of a component's view. For example, a CSS theme class could be applied to the parent element, and you want to change how child component looks based on that.

## Different View Encapsulation options

ViewEncapsulation.None ->  Removes encapsulation, so all the css properties mentioned in component are not specific to that component, now they are global. Also removes benefits of using :host which we use in case of ViewEncapsulation.Emulated.

ViewEncapsulation.Native -> Deprecated

ViewEncapsulation.Emulated -> This default option for ViewEncapsulation, other styles outside the @component stylesheet [styles.scss] propogate into the components styles. But the styles that are defined in the @component's stylesheet are applied to this component only. While running it creates a unique identifier for each element.

ViewEncapsulation.ShadowDom -> Other styles outside the @component stylesheet [styles.scss] do not propogate into the components styles. And the styles that are defined in the @component's stylesheet are applied to this component only. It uses browser provided functionality i.e. we are using browser APIs instead of creating unique identifier to each element. It creates shadow-root like a new browser document for each component in which we have set encapsulation to ViewEncapsulation.ShadowDom. But ShadowDom is not implemented in all browsers yet, so it's always better to use ViewEncapsulation.Emulated which is deffault option.