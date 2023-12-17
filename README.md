There is you can get svg sprite's IDs for your project. First of all you need to create an svg sprite by using https://svgsprit.es/. 
You will get an SVG sprite and refs for icons pasting. Save the SVG sprite, then copy refs and paste it
to our site's input field. You will get a list of sprite's IDs by clicking 'Get refs' button. A using pattern is:
```html
<svg class="icon">
  <use xlink:href="#XXX"></use>
</svg>

```
where #XXX is SVG sprite's ID.

Note for me: Don't forget to remove fill or stroke attributes from necessary symbol elements to get the opportunity to repaint them in other colors.