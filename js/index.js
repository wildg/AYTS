
$("#nums-section").waypoint( function() {
    anime({
        targets: ".nums-img",
        easing: 'easeOutBack',
        delay: anime.stagger(400),
        keyframes: [
            {translateX: -50, duration: 0},
            {translateX: 0, opacity: 0.1, duration: 700},
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
    source: ["images/TUSK_360/1.jpg", "images/TUSK_360/5.jpg", "images/TUSK_360/9.jpg", "images/TUSK_360/13.jpg", "images/TUSK_360/17.jpg", "images/TUSK_360/21.jpg", "images/TUSK_360/25.jpg", "images/TUSK_360/29.jpg", "images/TUSK_360/33.jpg", "images/TUSK_360/37.jpg", "images/TUSK_360/41.jpg", "images/TUSK_360/45.jpg", "images/TUSK_360/49.jpg", "images/TUSK_360/53.jpg", "images/TUSK_360/57.jpg", "images/TUSK_360/61.jpg", "images/TUSK_360/65.jpg", "images/TUSK_360/69.jpg", "images/TUSK_360/73.jpg"],
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