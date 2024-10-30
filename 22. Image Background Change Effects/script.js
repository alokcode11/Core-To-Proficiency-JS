var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var orignialImg = document.getElementById("orignialImg");
var line = document.getElementById("line");
//space left to the imgBox
var leftSpace = imgBox.offsetLeft;

orignialImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {
  // x position of  the cursor
  // it gives with respect to the body
  //image box has space form the left side so we have to calculate
  // e.pageX; store in another variable

  var boxWidth = e.pageX - leftSpace + "px";
  // we have to set baxWidth value into image wrap
  //bcz we have to dinimically chage its width when cursor move
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
