var rank={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0};
var total=14;
function randomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Show -------------------------------------------
function show(){
    let image1 = randomInt(1,total);
    let image2 = null;
    var list = Object.values(rank).sort(function(a,b){return a - b}).reverse();
    var empty = [];
    {while(true){
      image2 = randomInt(1,total); if(image1 == image2){continue} else break;}   
    }
    document.getElementById("leftImg").setAttribute('src',`${image1}.jpg`);
    document.getElementById("rightImg").setAttribute('src',`${image2}.jpg`);

    for(let i = 0; i < total; i++){
        for (let j = 0; j < total; j++) {
            if(list[i] == Object.values(rank)[j]){
                empty.push(Object.keys(rank)[j]);
            }       
        }
    }
        var eeee = new Set(empty)
        empty = new Set(empty)
        let massiv = ['undefined']
        for(let item of empty){
            massiv.push(item)
        }
    var galleryTop = document.querySelector(".gallery")
    galleryTop.innerHTML = ""

    var man = []
    for(let item of eeee){
        man.push(item)
    }
        console.log(man)
    for(let i = 0; i < total; i++){
        galleryTop.innerHTML += `<img src="${massiv[i+1]}.jpg" title="${man[i+1]}">`
    }

$(".right img, .left img").hide().fadeIn(300)

/*var varr = document.querySelector("h2")
varr.innerHTML = 'text'
varr.setAttribute("title",`${Object.values(rank)[0]}`)


var images = document.querySelectorAll('img')
var mas = []
for(let i = 1; i <= total; i++){
    mas.push(images[i].alt)
    console.log(Object.keys(rank)[i])
}
console.log(mas)

for(let i = 0; i <= total; i++){
    images[i+1].setAttribute("title",`${Object.values(rank)[mas[i]]}`)

}
*/
}
// Show -------------------------------------------


function Left(){
    leftVoice = document.getElementById("leftImg").getAttribute('src')
    leftVoice = parseInt(leftVoice)
    rank[leftVoice]++
    show()
}
function Rigth(){
    leftVoice = document.getElementById("rightImg").getAttribute('src')
    leftVoice = parseInt(leftVoice)
    rank[leftVoice]++
    show()
}

document.querySelector(".left").addEventListener('click',Left)
document.querySelector(".right").addEventListener('click',Rigth)

addEventListener("keyup",function(e){
    if(e.key == "d" || e.key == "D" || e.key == "в" || e.key === "В"){
        Rigth();
        $("#rightImg").css({
            "box-shadow":"0px 0px 10px 10px salmon"
        }).fadeTo(100,1,function(){
            $("#rightImg").css({
                "box-shadow":"inset 0px 0px 10px 10px salmon"
            })
        })
    }
    if(e.key == "A" || e.key == "a" || e.key == "ф" || e.key === "Ф"){
        Left();
        $("#leftImg").css({
            "box-shadow":"0px 0px 10px 10px salmon"
        }).fadeTo(100,1,function(){
            $("#leftImg").css({
                "box-shadow":"none"
            })
        })
    }
})

const facemash = Vue.createApp({
    data() {
        return {
            text: "FACEMASH.TJ"
        }
    },
}).mount("#facemashtj")

