canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");


car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_img = "car1.png";


car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 100;
car2_img = "car 2 real.png"

background_img = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uplaodcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uplaodcar2;
    car2_imgTag.src = car2_img;
}
function uploadbackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height) }

function uplaodcar1() { ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height) }

function uplaodcar2() { ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height) }

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '87') {
        car1_up();
        console.log("w");
    }
    if (keypressed == '83') {
        car1_down();
        console.log("s");
    } if (keypressed == '65') {
        car1_left();
        console.log("a");
    } if (keypressed == '68') {
        car1_right();
        console.log("d");
    } if (keypressed == '73') {
        car2_up();
        console.log("i");
    } if (keypressed == '75') {
        car2_down();
        console.log("k");
    } if (keypressed == '74') {
        car2_left();
        console.log("j");
    } if (keypressed == '76') {
        car2_right();
        console.log("l");
    }
}
function car1_up() {
    if (car1_y >= 0) 
    {
        car1_y = car1_y - 10
        console.log("When up arrow is pressed, x=" + car1_y + "1y=" + car1_x);
         uploadbackground();
         uplaodcar1();
         uplaodcar2();
    }
}d
function car1_down() 
{
    if (car1_y <= 700) {
        car1_y = car1_y + 10
        console.log("When down arrow is pressed, x=" + car1_x + "1y=" + car1_y);
        uploadbackground();
        uplaodcar1();
        uplaodcar2();
    }
}
function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10
        console.log("When up arrow is pressed, x=" + car1_x + "1y=" + car1_y);
        uploadbackground();
        uplaodcar1();
        uplaodcar2();
    }
}
function car1_right()
{
    if (car1_x <= 700) {
        car1_x = car1_x + 10
        console.log("When down arrow is pressed, x=" + car1_x + "1y=" + car1_y);
        uploadbackground();
        uplaodcar1();
        uplaodcar2();
    }
}
function car2_up() {
    if (car2_y >= 0) 
    {
        car2_y = car2_y - 10
        console.log("When up arrow is pressed, x=" + car2_y + "1y=" + car2_y);
         uploadbackground();
         uplaodcar2();
         uplaodcar2();
    }
}
function car2_down() 
{
    if (car2_y <= 700) {
        car2_y = car2_y + 10
        console.log("When down arrow is pressed, x=" + car2_x + "1y=" + car2_y);
        uploadbackground();
        uplaodcar2();
        uplaodcar2();
    }
}
function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10
        console.log("When up arrow is pressed, x=" + car2_x + "1y=" + car2_y);
        uploadbackground();
        uplaodcar2();
        uplaodcar2();
    }
}
function car2_right()
{
    if (car2_x <= 700) {
        car2_x = car2_x + 10
        console.log("When down arrow is pressed, x=" + car2_x + "1y=" + car2_y);
        uploadbackground();
        uplaodcar2();
        uplaodcar2();
    }
}


if(car1_x > 688)
{
    console.log("car1 Won")
    document.getElementById('game_status').innerHTML="Car 1 Won"
}
if(car2_x > 688)
{
    console.log("car2 Won")
    document.getElementById('game_status').innerHTML="Car 2 Won"
}