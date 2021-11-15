document.addEventListener("DOMContentLoaded", function(event){
    
    let widthScreen = document.getElementById('clouds').clientWidth;

    gsap.set(".clouds img", {scale: 0.5, opacity: 0.5});

    var tlClouds = gsap.timeline({ repeat:30, repeatDelay:0 });

    tlClouds.fromTo('.clouds img:nth-child(1)',{x:-200,y:15},{duration:120, x: widthScreen});
    
    tlClouds.fromTo('.clouds img:nth-child(2)',{x:0,y:0},{duration:150, x: widthScreen},"-50");
    
    tlClouds.fromTo('.clouds img:nth-child(3)',{x:0,y:0},{duration:170, x: widthScreen},"-70");

});