document.addEventListener("DOMContentLoaded", function(event){
    
    let widthScreen = window.innerWidth;
    let heightScreen = window.innerHeight;
    
    const onResize = (e) => {
        
        widthScreen = window.innerWidth;
        heightScreen = window.innerHeight;

        if (window.matchMedia("(min-width: 600px)").matches) {
            // The view port is at least 600 pixels wide
            gsap.set('.clouds img:nth-child(1)',{y:15});
            gsap.set('.clouds img:nth-child(2)',{y:0});
            gsap.set('.clouds img:nth-child(3)',{y:0});
            
        } else {
            // The view port is less than 600 pixels wide
            gsap.set('.clouds img:nth-child(1)',{y:100});
            gsap.set('.clouds img:nth-child(2)',{y:120});
            gsap.set('.clouds img:nth-child(3)',{y:140});
            
        }
    }

    onResize();

    window.addEventListener('resize', () => onResize())


    var tlClouds = gsap.timeline({ repeat:30, repeatDelay:0 });

    gsap.set(".clouds img", {scale: 0.5, opacity: 0.5});

    //Cloud 1
    let wCloud1 = 335;
    //let wCloud1 = document.getElementsByClassName('cloud')[0];
    // console.log('wCloud1: ',wCloud1);
    // console.log('wCloud1-width: ',wCloud1.getBoundingClientRect());//
    // console.log('wCloud1-width: ',wCloud1.width);
    
    //Cloud 2
    let wCloud2 = 527;

    //Cloud 2
    let wCloud3 = 510;

    tlClouds.fromTo('.clouds img:nth-child(1)',{x:-200},{duration:120, x: widthScreen - wCloud1});
    
    tlClouds.fromTo('.clouds img:nth-child(2)',{x:0},{duration:150, x: widthScreen - wCloud2},"-50");
    
    tlClouds.fromTo('.clouds img:nth-child(3)',{x:0},{duration:170, x: widthScreen - wCloud3},"-70");

});