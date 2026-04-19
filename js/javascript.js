let audio = document.querySelector('audio');
let img = document.querySelector('img');
let h3 = document.querySelector('h3');
const ar = [
    {
        "title":"Ishaq",
        "path":"./music/Kailash.mp3",
        "image":"./images/ishq.jpg"
    },
    {
        "title":"Soulmate",
        "path":"./music/Khushi.mp3",
        "image":"./images/soulmate.jpg"
    },
    {
        "title":"Animal",
        "path":"./music/lahore.mp3",
        "image":"./images/animal.jpg"
    }
];

let i=0;

function pre(){
    i=i-1;
    if(i<0){
        i=ar.length-1;
    }
    audio.src=ar[i].path;
    img.src=ar[i].image;
    h3.innerHTML=ar[i].title;
    audio.play();
    document.querySelector('.fa-pause').style.display='block';
    document.querySelector('.fa-play').style.display='none';
    dur();
}

function next(){
    i=i+1;
    if(i==ar.length){
        i=0;
    }
    audio.src=ar[i].path;
    img.src=ar[i].image;
    h3.innerHTML=ar[i].title;
    audio.play();
    document.querySelector('.fa-pause').style.display='block';
    document.querySelector('.fa-play').style.display='none';
    dur();
}

function aplay(){
    audio.play();
    document.querySelector('.fa-pause').style.display='block';
    document.querySelector('.fa-play').style.display='none';
    dur();
}

function push(){
    audio.pause();
    document.querySelector('.fa-pause').style.display='none';
    document.querySelector('.fa-play').style.display='block';
    clearInterval();
}

function dur(){

    setInterval(()=>{
        let p =( audio.currentTime / audio.duration)*100;
        document.querySelector('.progress-bar').style.width = p + '%';
    },1000)
}