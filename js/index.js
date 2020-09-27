$("#nums-section").waypoint( function() {
    anime({
        targets: ".nums-txt",
        easing: 'easeOutBack',
        delay: anime.stagger(400),
        keyframes: [
            {translateX: -50, duration: 0},
            // {translateX: 0, opacity: 0.1, duration: 700},
            {translateX: 0, opacity: 1, duration: 700},
        ]
    });
    this.destroy();
}, {offset: "75%"});

$("#story-section").waypoint( function() {
    anime({
        targets: ".story-img",
        easing: 'easeOutBack',
        delay: anime.stagger(400),
        keyframes: [
            {translateX: -50, duration: 0},
            {translateX: 0, opacity: 1, duration: 700},
        ]
    });
    this.destroy();
}, {offset: "75%"});

$('.tuskSpin').spritespin({
    source: ["images/TUSK_360/1.jpg", "images/TUSK_360/10.jpg", "images/TUSK_360/20.jpg", "images/TUSK_360/30.jpg", "images/TUSK_360/40.jpg", "images/TUSK_360/50.jpg", "images/TUSK_360/60.jpg", "images/TUSK_360/70.jpg", "images/TUSK_360/80.jpg", "images/TUSK_360/90.jpg", "images/TUSK_360/100.jpg", "images/TUSK_360/110.jpg", "images/TUSK_360/120.jpg", "images/TUSK_360/130.jpg", "images/TUSK_360/140.jpg", "images/TUSK_360/150.jpg", "images/TUSK_360/160.jpg", "images/TUSK_360/170.jpg"],
    sense: 1.5,
    detectSubsampling : false,
    responsive: true,
    wrap: true,
    animate: false,
    plugins: [
        '360',
        'move'
    ]
});

$('.ibexSpin').spritespin({
    source: ["images/IBEX_360/1.jpg", "images/IBEX_360/8.jpg", "images/IBEX_360/16.jpg", "images/IBEX_360/24.jpg", "images/IBEX_360/32.jpg", "images/IBEX_360/40.jpg", "images/IBEX_360/48.jpg", "images/IBEX_360/56.jpg", "images/IBEX_360/64.jpg", "images/IBEX_360/72.jpg", "images/IBEX_360/80.jpg", "images/IBEX_360/88.jpg", "images/IBEX_360/96.jpg", "images/IBEX_360/104.jpg", "images/IBEX_360/112.jpg", "images/IBEX_360/120.jpg", "images/IBEX_360/128.jpg", "images/IBEX_360/136.jpg", "images/IBEX_360/144.jpg"],
    sense: 1.5,
    detectSubsampling : false,
    responsive: true,
    wrap: true,
    animate: false,
    plugins: [
        '360',
        'move'
    ]
});