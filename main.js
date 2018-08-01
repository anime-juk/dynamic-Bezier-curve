var c1 = document.querySelectorAll("circle")[0],
c2 = document.querySelectorAll("circle")[1],
c3 = document.querySelectorAll("circle")[2],
c4 = document.querySelectorAll("circle")[3],
path = document.querySelector("path"),
dd, 
d = {x1:100,y1:180,x2:190,y2:100,x3:280,y3:100,x4:370,y4:180}, 
w1 = document.querySelector("svg");  


w1.addEventListener("mousedown",mdHandler);
function mdHandler(e){
  if(e.target instanceof SVGCircleElement){
    dd = e.target;
    dd.x = e.target.getAttribute("cx");
    dd.y = e.target.getAttribute("cy");
    dd.clientX = e.clientX;
    dd.clientY = e.clientY;
    
    w1.addEventListener("mousemove",mmHandler);
    w1.addEventListener("mouseup",muHandler);
  }
}

function mmHandler(e){
    dd.setAttribute("cx",e.clientX - (dd.clientX - dd.x));
    dd.setAttribute("cy",e.clientY - (dd.clientY - dd.y));
  switch( dd ){
    case c1:
      d.x1 = dd.getAttribute("cx");
      d.y1 = dd.getAttribute("cy"); 
      break;    
    case c2:
      d.x2 = dd.getAttribute("cx");
      d.y2 = dd.getAttribute("cy"); 
      break;
    case c3:
      d.x3 = dd.getAttribute("cx");
      d.y3 = dd.getAttribute("cy"); 
      break;
    case c4:
      d.x4 = dd.getAttribute("cx");
      d.y4 = dd.getAttribute("cy"); 
      break;        
  }
  path.setAttribute("d",`M${d.x1} ${d.y1} C ${d.x2} ${d.y2} ${d.x3} ${d.y3} ${d.x4} ${d.y4}`);
}
function muHandler(e){
    w1.removeEventListener("mousemove",mmHandler);
    w1.removeEventListener("mouseup",muHandler);
} 