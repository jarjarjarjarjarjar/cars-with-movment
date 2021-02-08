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
car2_y = 10;
car2_img = "car 2 test.png"

background_img = "racing.jpg";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uplodBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uplaodcar1;
    car1_imgtag.src = car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload = uplaodcar2;
    car2_imgtag.src = car2_img;
}
function uploadbackground() { ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvs.height) }

function uploadbackground() { ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height) }

function uploadbackground() { ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height) }

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
    } if (keypressed == '73') {
        car2_left();
        console.log("74");
    } if (keypressed == '76') {
        car2_right();
        console.log("l");
    }
}