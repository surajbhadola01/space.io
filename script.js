const timeline = gsap.timeline({defaults:{}});
timeline
        .from(".banner-img",{duration:3,ease:'power2.out',x:'100%'})
        .from(".planet",{ease:'linear',rotation:'360',repeat: -1,duration:10},"-=1")

