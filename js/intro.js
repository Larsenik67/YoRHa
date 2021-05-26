var e = document.getElementById("myvid");
e.style.opacity = 0;

window.oncontextmenu = function () {
    return false;
 }
var vid = document.getElementById("myvid");
vid.oncanplaythrough = function() {
    setTimeout(function() {
        var e = document.getElementById('myvid');
        fade(e);
    }, 0);
};

function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 25);
}