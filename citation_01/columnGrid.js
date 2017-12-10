function renderGrid(){
	var blocks = document.getElementById("grid_container").children;
	var pad = 10, cols = 3, newleft, newtop;
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
			blocks[i].style.top = newtop+"px";
			} else {
				if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";
			}
		}
}
window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);