L.mapbox.accessToken = 'pk.eyJ1Ijoiazk4cCIsImEiOiJjanRzbzdtYmkwenF3NDRyMDg5Mjk4dHRnIn0.eKT472x6H4sCySkASC18-Q';     //access token
var map = L.mapbox.map('map');  //drawing the mao in the 'map' div
map.setView([22.5867, 88.4171], 13);    //first argument - co-ordinates of target location, 2nd argument is the zoom
map.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
var latlngs = [
                    [22.558552, 88.412687],
                    [22.573304, 88.420620],
                    [22.566689, 88.435810],
                    
                    [22.581518, 88.442145],
                    [22.585047, 88.435518],
                    [22.601075, 88.424294],
                    [22.602946, 88.413675],
                    [22.592150, 88.395481],
                    [22.580701, 88.401119],
                    [22.571125, 88.404156],
                    [22.558338, 88.411372],
                    [22.558552, 88.412687],
];      //co-ordinates of the vertices


var currentline = new Array(2);     //contains the co-ordinates of two end points of the line
var prelines = new Array(12);       //array to store the lines. This is done to keep each line in SEPERATE LAYER
for (var j=0; j<11; ++j){
    currentline[0]=latlngs[j];
    currentline[1]=latlngs[j+1];
    prelines[j] = L.polyline(currentline, {color:'red'});
    prelines[j].addTo(map);
}

setInterval(animate, 1000);    //animation
var i=0;                       //used in while loop


function animate(){
    if (i==11){
        //clearInterval(id);
        setInterval(replenish, 10);     //when all lines are removed then
                                        //replenish function is called to
                                        //to regenerate the lines again
        var k=0;
        function replenish(){
            prelines[k].addTo(map);     //Layers added
            k++;
        }
        i=0;                            //set to zero to start removing again
    }
    else{
        prelines[i].remove();           //removing the layer one by one
        i++;
    }
                    
}
                            
var button = document.getElementById('reset');
button.addEventListener("click", resetfun);

function resetfun(){                    //button function
    for (var j=i; j<11; ++j){           //when button is pressed all the remaining lines are removed
        prelines[j].remove();
    }
    for (var j=0; j<11; ++j){           //then all the lines are added again
        currentline[0]=latlngs[j];
        currentline[1]=latlngs[j+1];
        prelines[j] = L.polyline(currentline, {color:'red'});
        prelines[j].addTo(map);
    }
    i=0;
}

