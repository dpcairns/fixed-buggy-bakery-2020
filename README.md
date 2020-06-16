# shopping-cart

### Note: these bugs weren't in the original student submission. I introduced these bugs for this assignment.

# Bugs

## Products pages
1) None of the products are showing up. Check the loop and see if we're accessing the products correctly
1) Nothing hapens when you click on the add button. And even if it did, something seems weird about the handler

## Shopping cart
1) The cart table seems to be rendering wrong. `localStorage` seems to say that the cart is `[Object object]`. Huh?
1)

## Debugging starting points

1) Open the javascript console in Chrome and follow the bouncing ball
1) Look for and examine red squiggles in VSCode, starting from top
1) Drop console logs/breakpoints in your code to see 
        - a) how far your code gets before it breaks
        - b) the value of your variables
                
        - What do you expect the variable values to be? 
        - Why do you expect it to be that way? Where do you make that happen?
        - Is the value what you expected? 
        - If not, why not? 
        - What would you have to change to make the actual value match your expectations?


## Most common JS error:

`Cannot read property 'type' of undefined (app.js:34)`
`
 
1) Go look for `.type` on line 34 in app.js
2) Look to the left of `.type`
3) Figure out why the thing to the left of `.type` is undefined
