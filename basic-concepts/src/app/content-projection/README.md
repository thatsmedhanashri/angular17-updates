## Content Projection: ng-content

Using tag name
<div style="background-color:bisque; border: solid 2px #808080; padding: 50px;">
    <p>Student name: {{student_.name}}</p>
    <ng-content select="p"></ng-content>
</div>

Using class name
<div style="background-color:bisque; border: solid 2px #808080; ">
    <p>Student name: {{student_.name}}</p>
    <ng-content select=".addPadding"></ng-content>
    <ng-content select=".class2"></ng-content>
    <ng-content></ng-content>
</div>

## @ContentChild()

@ContentChild('student') 
  studentInfo: any

Scope of @ContentChild() is only ng-content, other elements outside ng-content can't be accessible with ContentChild for that we can use ViewChild. Also with viewChild we can't access elements inside ng-content.

## @ContentChildren()

@ContentChildren('student') 
  studentInfo: QueryList<any> | undefined

@ContentChildren has same scope as @ContentChild but it can take array of elements having matching id, @ContentChild takes only first matching element.