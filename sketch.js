var canvas;
var ui = '';
var result;
var dc,mc;

function setup(){
    canvas = createCanvas(347,493);
    canvas.class("can");
    calc = new cal();
}

function draw(){
    background("black");
    calc.display();
}
