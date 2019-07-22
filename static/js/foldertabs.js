
function changeZIndex(id,header) {
  var el = document.getElementById(`${id}`); // or use $0 in chrome;
  var styles = window.getComputedStyle(el);
  console.log("previous "+ id + " zindex: "+ styles.zIndex);
  if (styles.zIndex == 3) {
  	 document.getElementById(id).style.zIndex = 2;
     document.getElementById(header).style.marginTop = '15px';
     document.getElementById(header).style.height = '25px';
     document.getElementById(header).style.backgroundColor = 'lightslategray';
    console.log("Z-Index of " + id + " is now: " + styles.zIndex);
  } else {
  	document.getElementById(id).style.zIndex = 3;
    document.getElementById(header).style.marginTop = 0;
    document.getElementById(header).style.height = '40px';
    document.getElementById(header).style.backgroundColor = 'lightskyblue';
    console.log("Z-Index of " + id + " is now: " + styles.zIndex);

  };//end if
};


// function changeZIndex(id) {
//   var el = document.getElementById(`${id}`); // or use $0 in chrome;
//   var styles = window.getComputedStyle(el);
//   console.log(styles.zIndex, el);
//
// };


// Animation
// header titles remove margin top and increase height by same amount
// marging remove 15px height now 40px
