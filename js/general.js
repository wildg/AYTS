
var dropdown = false;

$("#header-burger").click(function() {
    dropdown ?  dropdownClose() : dropdownOpen();
    dropdown = !dropdown;
});

function dropdownOpen() {

    anime({
        targets: "#header-dropdown",
        easing: 'easeOutBack',
        height: 350,
        duration: 200
    });

    anime({
        targets: '#bun-1',
        easing: 'easeOutBack',
        keyframes: [
            {translateY: 11, duration: 150},
            {rotate: 45, duration: 100}
        ]
    });

    anime({
        targets: '#bun-2',
        easing: 'easeOutBack',
        delay: 150,
        rotate: -45,
        duration: 100
    });

    anime({
        targets: '#bun-3',
        easing: 'easeOutBack',
        keyframes: [
            {translateY: -11, duration: 150},
            {rotate: -45, duration: 100}
        ]
    });
}

function dropdownClose() {
    anime({
        targets: "#header-dropdown",
        height: 0,
        easing: 'linear',
        duration: 200
    });

    anime({
        targets: '#bun-1',
        easing: 'easeOutBack',
        keyframes: [
            {rotate: 0, duration: 100},
            {translateY: 0, duration: 150}
        ]
    });

    anime({
        targets: '#bun-2',
        easing: 'easeOutBack',
        duration: 100,
        rotate: 0
    });

    anime({
        targets: '#bun-3',
        easing: 'easeOutBack',
        keyframes: [
            {rotate: 0, duration: 100},
            {translateY: 0, duration: 150}
        ]
    });
}

$(".links").mouseenter(function() {
    var brack = $(this).find(".bracket");

    anime ({
        targets: brack[0],
        easing: 'easeOutBack',
        keyframes: [
            {translateX: 20, opacity: 0, duration: 350},
            {translateX: -20, duration: 0},
            {translateX: 0, opacity: 1, duration: 350}
        ]
    });
});

$(".fadeIn").waypoint(function() {
    $(this.element).addClass("animate__fadeIn");
    this.destroy();
}, {offset: '80%'});

$(".fadeIn-Down").waypoint(function() {
    $(this.element).addClass("animate__fadeInDown");
    this.destroy();
}, {offset: '80%'});

$(".fadeIn-Down-Abs").addClass("animate__fadeInDown");

$(".fadeIn-Up").waypoint(function() {
    $(this.element).addClass("animate__fadeInUp");
    this.destroy();
}, {offset: '80%'});

$(".fadeIn-Right").waypoint(function() {
    anime({
        targets: this.element,
        opacity: 1,
        easing: 'linear',
        keyframes: [
            {translateX: -30, duration: 0},
            {translateX: 0, opacity: 1, duration: 200}
        ]
    });
    this.destroy();
}, {offset: "80%"});

$(".counterEmpty").waypoint( function() {
    anime({
        targets: this.element.querySelectorAll('.oneHalf'),
        easing: 'linear',
        width: "50%",
        duration: 700
    })

    anime({
        targets: this.element.querySelectorAll('.fill'),
        easing: 'linear',
        delay: anime.stagger(400),
        // delay: 400,
        background: "#4169e1",
        borderWidth: "0",
        duration: 300
    });
}, {offset: "90%"});