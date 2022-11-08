let images = [
    "assets/images/services/jisoo",
    "assets/images/services/lisa",
    "assets/images/services/jennie"
];

let num = 0;

function next(){
    let slider = document.getElementById("slider");

    num++;
    if (num > images.length){
        num = 0;
    }
    slider.src = images[num]
}

function prev(){
    let slider = document.getElementById("slider");

    num--;
    if (0 > num){
        num = images.length-1;
    }
    slider.src = images[num]
}