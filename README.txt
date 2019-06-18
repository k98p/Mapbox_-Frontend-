In this challenge, the Mapbox API has been used to generate a map at a particular co-ordinate.
10-11 vertices have been taken to draw the line.
As a preload method, each line is drawn in seperate layer and added to the map
Next an animation is queued which removes each line/layer in 1 sec each
When all lines are removed, the regenerate function is called which does the same work as the preload method

A RESET button has been added to the end of the page.
When this button is clicked, all the remaining lines/Layers are removed from the map
Then all the lines are added to bring program/application to the initial condition.