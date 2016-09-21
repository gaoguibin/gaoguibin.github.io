var container = document.getElementsByClassName("container")[0];
var aPage = document.getElementsByClassName("page");
var top1 = document.getElementsByClassName("top1")[0];
var top3 = document.getElementsByClassName("top3")[0];
var top4 = document.getElementsByClassName("top4")[0];
var top5 = document.getElementsByClassName("top5")[0];
var point = document.getElementsByClassName("point")[0];
var btn = document.getElementsByClassName("btn")[0];
var innerH = window.innerHeight;
var index = 0;
btn.style.top = innerH * (index + 1) - 50 + "px";
point.style.top = innerH * (index + 1) - 30 + "px";
for (var i=0; i<aPage.length; i++) {
	aPage[i].style.height = innerH + "px";
}
container.style.height = 100 * aPage.length + "%";
window.onscroll = function(){
	return false;
}
document.addEventListener("touchstart",function(ev){
	this.startY = ev.touches[0].clientY;
	ev.preventDefault();
});
document.addEventListener("touchmove",function(ev){
	this.moveY = ev.touches[0].clientY;
	ev.preventDefault();
});

document.addEventListener("touchend",function(){
	this.Y = this.moveY - this.startY;
	if (this.Y < 0) {
		index++;
		if(index == aPage.length) index--;
	} else{
		index --;
		if(index < 0) index++;
	}
	container.style.transform = "translateY(-"+index * innerH +"px)";
	top1.style.top = innerH * index + "px";
	top3.style.top = innerH * index + 15 + "px";
	top4.style.top = innerH * index + 15 + "px";
	top5.style.top = innerH * index + 15 + "px";
	btn.style.top = innerH * (index + 1) - 50 + "px";
	point.style.top = innerH * (index + 1) - 30 + "px";
	
	//第四页动画添加删除
	if(index == 3){
		out();
	}else if(index-3 == 1 || -1){
		remove();
	}
})


//第四页动画
var makers = document.querySelectorAll(".page4 div");
var lines = document.querySelectorAll("#black div");
function out(){
	for(var i=0; i<8; i++){
		makers[i].setAttribute("id","maker"+(i+1));
	}
	for (var j=0; j<lines.length; j++) {
		lines[j].setAttribute("class","line"+(j+1));
	}
}
function remove(){
	for(var i=0; i<8; i++){
		makers[i].removeAttribute("id");
	}
	for (var j=0; j<lines.length; j++) {
		lines[j].removeAttribute("class");
	}
}