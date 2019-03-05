// Your code goes here
//            MOUSEOVER NAV
const navItems = document.querySelectorAll('a');
// console.log(navItem);
//       FUNCTION TO CREATE LISTENERS
function addEventListenerList(list,event,fn) {
    for(let i=0; i<list.length; i++) {
        list[i].addEventListener(event, fn);
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
//            WHEEL
const contentImage = document.getElementsByClassName('img-content');
console.log(contentImage);
contentImage[0].addEventListener('wheel', function(e) {
    contentImage[0].title = "MAPS ARE FUN!";
});
contentImage[1].addEventListener('wheel', function(e) {
    contentImage[1].title = "ADVENTURE!";
});
//          DRAG/DROP
//curently throwing an error;
function dragstart_handler(event) { //what does ev stand for?
   //Identify WHAT is draggable
    console.log('dragStart');
   event.dataTransfer.setData('image/jps', event.target.id);
   event.dataTransfer.setData('image/jpg', 'img/destination.jpg');
   //Drag Image 
   let img = new Image();
   img.src = 'img/adventure.jpg';
   event.dataTransfer.setDragImage(img, 10, 10);
   //Drop Effect
   event.dataTransfer.dropEffect = 'copy';
}
function dragover_handler(event) {
    event.preventDefault();
    //Set the droppEffect to move
    event.dataTransfer.dropEffect = 'move';
}
function drop_handler(event) {
    event.preventDefault();
    //Get the ID of the target and add the moved element
    //to the targets DOM
    let data = event.dataTransfer.getData('img/jpg');
    event.target.append(document.getElementById('target'));
}