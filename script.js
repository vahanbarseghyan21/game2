let pubg_power_music = document.querySelector("#pubg-power-music");
document.querySelector("#pubg-bg-music").autoplay();

function bg_music_pubg_() {
    let bg_music_pubg = document.querySelector("#pubg-bg-music");
    bg_music_pubg.setAttribute('autoplay', 'autoplay');
    // bg_music_pubg.play();
}
// 
function start() {
    let start_content = document.querySelector(".start-content");
    start_content.style.display = "none";

}
let point = document.querySelector(".point .p1");
let pubg_imgs = document.querySelectorAll(".livik .img1");
let w = pubg_imgs.length;
let point_sum = 0;
for (let i = 0; i < w; i++) {
    pubg_imgs[i].onclick = (e) =>{
        
        // pubg_power_music.setAttribute('autoplay', 'autoplay');
        pubg_power_music.play();
        pubg_imgs[i].style.display = "none";
        console.log(i);
        point_sum++;
        point.innerHTML = point_sum;
        if (point_sum == 8) {
            pubg_gameover(point_sum);
        }
    }
    
}
function pubg_gameover(t){
    if (t == 8) {
        alert("You Woning");
    } else {
        alert("Game Over");
    }
}
