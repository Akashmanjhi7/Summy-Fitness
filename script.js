function customCursor(){
    
    let mouse=  document.querySelector("#mouse");
    var mouseblur=  document.querySelector("#mouse-blur");
    document.addEventListener("mousemove",(dets)=>{
        mouse.style.left=dets.x+"px"
        mouse.style.top=dets.y+"px"
        mouseblur.style.left=dets.x-203+"px"
        mouseblur.style.top=dets.y-203+"px"
       })

       var h4all = document.querySelectorAll("#nav h4");

       h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",()=>{
            mouse.style.scale=4;
            mouse.style.border= "1px solid white"
            mouse.style.backgroundColor= "transparent"

        })
        elem.addEventListener("mouseleave",()=>{
            mouse.style.scale=1;
            mouse.style.border= "none"
            mouse.style.backgroundColor= "#2c64f3fd"
        })
       })
       
       
    //    let elems = document.querySelectorAll("#elem")
    //    elems.forEach(function(element){
    //     element.addEventListener("mouseenter",()=>{
    //         mouse.style.scale=4;
    //         mouse.style.border="1px solid white"
    //         mouse.style.backgroundColor="transparent"

    //        })

    //        element.addEventListener("mouseleave",()=>{
    //         mouse.style.scale=1;
    //         mouse.style.border="none"
    //         mouse.style.backgroundColor="#2c64f3fd"

    //        })
    //    })
       

}
customCursor();


gsap.to("#nav",{
    backgroundColor:"#000",
    color:" color: rgb(19, 81, 239);",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:true
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:1,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 40%",
      scrub: 1,
    },
  });

 

//   gsap.from(".cards", {
//     y: 90,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".cards",
//       scroller: "body",
//       // markers:true,
//       start: "top 68%",
//       end: "top 65%",
//       scrub: 2,
//     },
//   });


gsap.from("#colon1",{
    y:-90,
    x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    },
})
gsap.from("#colon2",{
    y:90,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 57%",
        scrub:4
    },
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 1,
    },
  });