## ng-template

<h1 *ngIf="flag; else flagfalse">Working on Angular Templates.</h1>
<ng-template #flagfalse>
    <h1>Data not available.</h1>
</ng-template>

Angular do not load ng-template by default, we need to give a case in which it need to be load and show in the browser.
We need to use ng-template with ngIf, if we use another element then it will give compile time error.

## ngTemplateOutlet and ng-template scoped variables

<ng-template #checkoutlet let-info="description">
    <h1>Checking ngTemplateOutlet</h1>
    <h1>Description: {{info}}</h1>
</ng-template>

<ng-container *ngTemplateOutlet="checkoutlet; context:{description: 'Checking context attribute...'}"></ng-container>

We can instantiate ng-template using ngTemplateOutlet, also we can pass parameters to it and they have scope to respective ng-template.

## Passing ng-template as Input to child component

Parent component:
<div style="background-color: brown; border: solid 2px #808080; padding: 10px">
    <app-child [templateInstance]="checkoutlet"></app-child>
</div>

Child component:
@Input()
  templateInstance : TemplateRef<any> | undefined

<div *ngIf="templateInstance">
    <ng-container *ngTemplateOutlet="templateInstance; context:{description: 'Checking context attribute...'}"></ng-container>
</div>

We can pass ng-template as input to child component.
