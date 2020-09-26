$(".icons-lg").waypoint( function() {
    anime({
        targets: ".tusk-icons",
        easing: 'easeOutBack',
        delay: anime.stagger(300),
        keyframes: [
            {translateX: -50, duration: 0},
            {translateX: 0, opacity: 1, duration: 400},
        ]
    });
    this.destroy();
}, {offset: "75%"});