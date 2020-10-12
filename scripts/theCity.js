
var toggleClass = function (el, className) {
    if (el) {
        if (el.className.indexOf(className) != -1) {
            el.className = el.className.replace(className, '');
        } else {
            el.className += ' ' + className;
        }
    }
};

function showMenu() {
        toggleClass(document.getElementById("overlay-menu"), "open").fadeToggle(slow);
    }



showMenu(); 

