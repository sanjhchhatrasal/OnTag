function pageTwo(){
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2 .pt2",
            scroller: "body",
            start: "top 50%",
            end: "top -350%",
          //  markers: true,
            scrub: true
        }
    })
    tl1
    .from(".elem1 .left .img",{
        left: "100%",
        rotate: "0deg"
    }, "a")
    .to(".elem1 .left .img",{
        left: "0%",
        rotate: "-10deg"
    }, "b")
    .from(".elem1 .right .img",{
        right: "100%",
         rotate: "0deg"
    }, "a")
    .to(".elem1 .right .img",{
        right: "0%",
         rotate: "10deg"
    }, "b")

    .from(".elem2 .left .img",{
        left: "100%",
        rotate: "0deg"
    }, "c")
    .to(".elem2 .left .img",{
        left: "0%",
        rotate: "-10deg"
    }, "d")
    .from(".elem2 .right .img",{
        right: "100%",
         rotate: "0deg"
    }, "c")
    .to(".elem2 .right .img",{
        right: "0%",
         rotate: "10deg"
    }, "d")

    .from(".elem3 .left .img",{
        left: "100%",
        rotate: "0deg"
    }, "e")
    .to(".elem3 .left .img",{
        left: "0%",
        rotate: "-10deg"
    }, "f")
    .from(".elem3 .right .img",{
        right: "100%",
         rotate: "0deg"
    }, "e")
    .to(".elem3 .right .img",{
        right: "0%",
         rotate: "10deg"
    }, "f")

    .from(".elem4 .left .img",{
        left: "100%",
        rotate: "0deg"
    }, "g")
    .to(".elem4 .left .img",{
        left: "0%",
        rotate: "-10deg"
    }, "h")
    .from(".elem4 .right .img",{
        right: "100%",
         rotate: "0deg"
    }, "g")
    .to(".elem4 .right .img",{
        right: "0%",
         rotate: "10deg"
    }, "h")
}
pageTwo()


function pageThree(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 0%",
            end: "top -400%",
         //   markers: true,
            pin: true,
            scrub: true
        }
    })
    tl2
    .to("#page3 .card2",{
        top: "18vh"
    }, "b")
    .to("#page3 .card3",{
        top: "70vh"
    }, "b")
    .to("#page3 .card3",{
        top: "30vh"
    }, "c")
    .to("#page3 .card4",{
        top: "80vh"
    }, "c")
    .to("#page3 .card4",{
        top: "40vh"
    }, "d")
    .to("#page3 .card5",{
        top: "80vh",
    }, "d")
    .to("#page3 .card5",{
        top: "50vh",
    }, "e")
    .to("#page3 .card5",{
        top: "6.1vh"
    } , "a")
    .to("#page3 .card4",{
        top: "6.1vh",
    }, "a")
    .to("#page3 .card3",{
        top: "6.1vh"
    }, "a")
    .to("#page3 .card2",{
        top: "6.1vh"
    }, "a")
}
pageThree()

function pageFour(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 30%",
            end: "top -100%",
           // markers: true,
            scrub: true
        }
    })
    tl3
    .to("#page4 .right .big-box3",{
      top: "-10%"
    }, "a")
    .to("#page4 .right .big-box4",{
        top: "-10%"
      }, "a")
}
pageFour();

function pageFive(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "top 0%",
            end: "top -200%",
         //   markers: true,
            scrub: true
        }
    })
    tl4
    .from("#page5 #top .box",{
        width: "70%"
    })
    .to("#page5 #top .box",{
        width: "85%"
    })
    .to("#page5 #btm .mid h2",{
        left: "25%"
    }, "a")
    .to("#page5 #btm .mid h3",{
        left: "25%"
    }, "a")
}
pageFive()

function blink(){
    const headings = document.querySelectorAll('.animated h2');

let index = 0;

function animateHeading() {
    if (index >= headings.length) {
        index = 0; 
    }

    headings[index].style.opacity = 1; 
    setTimeout(() => {
        headings[index].style.opacity = 0; 
        index++;
        animateHeading(); 
    }, 1500);
}

animateHeading(); // Start the animation sequence
}
blink()

var main = document.querySelector("#main");
var img = document.querySelector("#page5 #top>img");


main.addEventListener("mousemove", function(dets){
    img.style.top = 1-dets.y*0.05 + "px"
    img.style.left =1- dets.x*0.05 + "px"
})