# 3D Chess with HTML, CSS and JavaScript.
* The CSS ```overflow``` property controls what happens to content that is too big to fit into an area.
* The ```transform``` property applies a ```2D``` or ```3D``` transformation to an element.
This property allows you to rotate, scale, move, skew, etc., elements
* CSS ```transitions``` allows you to change property values smoothly, over a given duration.
* The ```flex``` container becomes flexible by setting the display property to flex:
* The ```flex-direction``` property defines in which direction the container wants to stack the flex items.
* The ```flex-wrap``` property specifies whether the flex items should wrap or not.
* The ```flex-flow``` property is a shorthand property for setting both the ```flex-direction``` and ```flex-wrap```properties.
> .flex-container {
>>
>> display: flex;
>>
>> flex-flow: row wrap;
>>
>}
>


## The justify-content Property
* The ```justify-content``` property is used to align the flex items:
* The ```center``` value aligns the flex items at the center of the container:
> .flex-container {
>>
>>  display: flex;
>>
>>  justify-content: center;
>>
>}
>

* The ```flex-start``` value aligns the flex items at the beginning of the container (this is default):
> .flex-container {
>>
>> display: flex;
>>
>>  justify-content: flex-start;
>>
}

* The ```flex-end``` value aligns the flex items at the end of the container:
>   .flex-container {
>>
>>  display: flex;
>>
>>  justify-content: flex-end;
>>  
>   }

* The ```space-around``` value displays the flex items with space before, between, and after the lines:
> .flex-container {
>
>>  display: flex;
>>
>>  justify-content: space-around;
>
> }
* The ```space-between``` value displays the flex items with space between the lines:
> .flex-container {
>
>> display: flex;
>>
>>justify-content: space-between;
>
> }

## The align-items Property
* The ```align-items``` property is used to align the flex items.
* The ```center``` value aligns the flex items in the middle of the container:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 200px;
>>
>>  align-items: center;
>
> }

* The ```flex-start``` value aligns the flex items at the top of the container:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 200px;
>>
>>  align-items: flex-start;
>
> }

* The ```flex-end``` value aligns the flex items at the bottom of the container:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 200px;
>>
>>  align-items: flex-end;
>
> }

* The ```stretch value``` stretches the flex items to fill the container (this is default):

> .flex-container {
>
>>  display: flex;
>>
>>  height: 200px;
>>
>>  align-items: stretch;
>
> }

* The ```baseline``` value aligns the flex items such as their baselines aligns:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 200px;
>>
>>  align-items: baseline;
>
> }

## The align-content Property
* The ```align-content``` property is used to align the flex lines.
* The ```space-between``` value displays the flex lines with equal space between them:
> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: space-between;
>
> }

* The ```space-around``` value displays the flex lines with space before, between, and after them:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: space-around;
>
> }

* The ```stretch``` value stretches the flex lines to take up the remaining space (this is default):

> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: stretch;
>
> }

* The ```center``` value displays display the flex lines in the middle of the container:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: center;
>
> }

* The ```flex-start``` value displays the flex lines at the start of the container:

> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: flex-start;
>
>}

* The ```flex-end``` value displays the flex lines at the end of the container: 

> .flex-container {
>
>>  display: flex;
>>
>>  height: 600px;
>>
>>  flex-wrap: wrap;
>>
>>  align-content: flex-end;
>
>}

## CSS top Property
* The top property affects the vertical position of a positioned element. This property has no effect on non-positioned elements.

If ```position: absolute;``` or ```position: fixed;``` - the top property sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor.
If ```position: relative;``` - the top property makes the element's top edge to move above/below its normal position.
If ```position: sticky;``` - the top property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.
If ```position: static;``` - the top property has no effect.


## CSS Layout - The position Property
*  The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or stick
`Position: static;`
HTML elements are positioned static by default.
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

> div.static {
>
>>  position: static;
>>
>>  border: 3px solid #73AD21;
>
> }

* An element with `position: relative;` is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

> div.relative {
>
>>  position: relative;
>>
>>  left: 30px;
>>
>>  border: 3px solid #73AD21;
>
> }

* An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
* An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

* An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).



