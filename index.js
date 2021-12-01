var btn3 = document.querySelector(".btn3");
var slide1 = document.querySelector(".slide1")
var slide2 = document.querySelector(".slide2")
var slide3 = document.querySelector(".slide3");
var btn2 = document.querySelector(".btn2");
var btn1 = document.querySelector(".btn1");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
console.log(btn4)
//eventwaiting
btn1.addEventListener("click", function(){
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    slide2.classList.remove("none");
    vitri.value = '';
})
btn3.addEventListener("click", function(){

    slide1.classList.add("none");
    // btn2.style.left = x;
    var audio2 = new Audio("sound/anhtheday.mp3");
    audio2.play();  
})
btn4.addEventListener("click", function(){

    slide2.classList.add("none");
    slide3  .classList.remove("none");

    // btn2.style.left = x;
})
btn5.addEventListener("click", function(){

    slide3  .classList.add("none");

    // btn2.style.left = x;
})
btn4.addEventListener("click", function(){

    slide2.classList.add("none");
    slide3  .classList.remove("none");


    // btn2.style.left = x;
})
btn2.addEventListener("mousemove", function(){
  var audio = new Audio("sound/duck.mp3");
  audio.play();

   var x = Math.floor(Math.random() *200)+ 100+ "px";
   var y = Math.floor(Math.random() *200    )+100+ "px";

    btn2.style.left = x;
    btn2.style.top = y;

})





//change input
var vitri = document.querySelector("input");
var arr = 'Tại Vì Cậu Đẹp Trai VLLLLL ahihi';
var text =  Array.from(arr);

vitri.onkeyup = function(e) {
    if(e.target.value.length == 4){
        e.target.value = arr + " "
        
    }
    console.log(e.target.value);
    if(e.target.value.length > arr.length +1 ){
        e.target.value = ''
    }
    
}