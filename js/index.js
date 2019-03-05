// Your code goes here
//            MOUSEOVER NAV
const navItems = document.querySelectorAll('a');
// console.log(navItem);
function addEventListenerList(list,event,fn) {
    for(let i=0; i<list.length; i++) {
        list[i].addEventListener(event, fn, false);
    }
}
addEventListenerList(navItems, 'mouseover', function() {
    this.style.position = "relative";
    this.style.bottom = "10px";
});
//buggy*
addEventListenerList(navItems, 'mouseleave', (function(e) {
    e.preventDefault();
        this.style.bottom = "";
    }));
//            KEYDOWN
// STOLE THIS 'GENERATOR' CODE ONLINE NOT SURE IF IT'S 
// OUT OF SCOPE TO EXPLAIN
// HOW IT WORKS
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const funBus = document.querySelector('.logo-heading');
window.addEventListener('keydown', function(e) {
    funBus.style.color = getRandomColor();
});
