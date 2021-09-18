var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "empty";
var color =  document.getElementById("color").value;
var thic =  document.getElementById("width").value;
var width = screen.width;
var height = screen.height;
var new_width = screen.width+50;
var new_height = screen.height-300;
var lastposofxm,lastposofym;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    document.getElementById("head").style.fontFamily="Segoe UI";
    document.getElementById("head").style.fontSize=70;
}
function set(){
    if (color == ""){
        window.alert("No color text");
    }else if(thic == ""){
        window.alert("No width set")
    }
}
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseevent = "mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup() {
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave) 
function mymouseleave() {
    mouseevent = "mouseleave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(para) {
    var posx = para.clientX-canvas.offsetLeft;
    var posy = para.clientY-canvas.offsetTop;
    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=thic;
        console.log("Last position of X and Y = ");
        console.log("X = "+lastposofxm);
        console.log("Y"+lastposofym);
        ctx.moveTo(lastposofxm , lastposofym);
        console.log("Current Position of X and Y = ");
        console.log("X="+posx);
        console.log("Y="+posy);
        ctx.lineTo(posx , posy);
        ctx.stroke();
    }
    lastposofxm = posx;
    lastposofym = posy;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(att) {
    console.log("touch_start");
    lastposofx = att.touches[0].clientX-canvas.offsetLeft;
    lastposofy = att.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    console.log("touch_move");
    crtposoftx = e.touches[0].clientX-canvas.offsetLeft;
    crtposofty = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath;
    ctx.strokeStyle = color;
    ctx.lineWidth = thic;
    ctx.moveTo(lastposofx , lastposofy);
    ctx.lineTo(crtposoftx , crtposofty);
    ctx.stroke();
    lastposofx = crtposoftx;
    lastposofy = crtposofty;
}
function Clean() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}