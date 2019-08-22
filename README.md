# EAS
Etch-A-Sketch for TOP

This is a project for The Odin Project. 

Goal:
Build an in browser Etch-A-Sketch emulator that the user can customize the resolution of.

Learning Goals:
1. Gain experience in DOM manipulation in Vanilla JS
2. Almost all the html/css will be controlled from script.js so there is abundant trial/error 
    Opportunities.
3. Get more comfortable with git workflow
4. Improve my own workflow for dividing and solving coding problems
5. Work on documentation.
6. Build cool shit.

Requirements:
v1. 16x16 version
1. It should have a container div
2. It should have a 16x16 grid of contained grids within it.
3. It should evenly space the inner divs
4. The inner divs should change to black on hover.

v2. Variable grid.
1. It should have a button to clear the current grid
2. It should take user input to construct a new grid
3. It should scale the gridBox's to fit within a fixed box.
-- Optional --
4. The gridBox's should change to random colors and mild opacity on hover.


To Do: ---- v2
1. Add buttons/menus to html
    a. It needs to prompt user for input
    b. It needs to set gridtemplate column to input number
    c. It needs to set gridtemplate row to input number
    d. It needs to muliply input number times input number
    e. It needs to call populateGrid() with mulitiplied input number
2. Style everything.
    a. line up button(s)
    b. set colors for site
    c. pick font(s)
    d. push container divs to appropriate places. 
3. Options: 
    a. Add randomized colors instead of black.
    b. Start colors at low opacity and add 10% black at each pass
    c. *my idea* have color fade out over time... leaving a trail behind mouse.






To Do: --- V1
// 1 set up git repo and localize
// 2 set up files
// 3 Test and set up means of creating grid

JS time!
// 1. Need a variable that sets grid count
// 2. Need a model of the grid boxes to push to dom
// 3. Need a function to push grid boxes to DOM gridcount times.
// 4. Need to listen for hover on boxes (google it)
// 5. Need to respond to hover with class change/style change
/6. Need to add css for class change. ?? /
