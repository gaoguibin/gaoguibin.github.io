//第一页动画
var top2 = document.querySelector(".top2");
var logos = document.querySelectorAll(".logo img");
var letter1 = document.querySelector(".letter1");
var letter2 = document.querySelector(".letter2");
var srcArr1 = ["img/1_0005_loading.png","img/1_0000s_0003_矩形-1.png","img/1_0000s_0000_椭圆-1-副本-2.png","img/1_0000s_0001_椭圆-1-副本.png","img/1_0000s_0002_椭圆-1.png","img/1_0000_矢量智能对象.png","img/1_0001s_0001_music_icon.png","img/1_0004s_0001_blue_bg.png","img/1_0004s_0002_red_bg.png","img/1_0004s_0000_yellow_bg.png","img/1_0003s_0003_右灰色.png","img/1_0003s_0002_蓝色二层.png","img/1_0003s_0005_左灰色.png","img/1_0003s_0004_绿色.png","img/1_0003s_0000_二层蓝.png","img/1_0003s_0001_二层红点.png","img/1_0002s_0005_白色D.png","img/1_0002s_0006_矢量智能对象.png","img/1_0002s_0007_白r&am.png","img/1_0002s_0000_R.png","img/1_0002s_0001_E.png","img/1_0002s_0002_K.png","img/1_0002s_0003_A.png","img/1_0002s_0004_M.png","img/1_0002_2015创想家盛典.png","img/1_0003_男人有梦就去造.png"];
classArr = ["blue_bg","red_bg","yellow_bg","gray_r","blue_two","gray_l","green","blue_d","red_d","white_d","white_e","ram","white_R","white_E","white_K","white_A","white_M"]
var imgArr1 = [];
var count1 = 0;
for(var i=0; i<srcArr1.length; i++){
	var img = new Image();
	img.src = srcArr1[i];
	imgArr1.push(img);
	img.onload = function(){
		count1++;
		top2.style.width = parseInt(count1/srcArr1.length*100) + "%";
		if(count1 == srcArr1.length){
			page1_show();
		}
	}
}
function page1_show(){
	$(".logo").show();
	for (var i=0; i<classArr.length; i++) {
		logos[i].setAttribute("class",classArr[i]);
		letter1.setAttribute("id","letter1");
		letter2.setAttribute("id","letter2");		
	}	
}
function page1_hide(){
	$(".logo").hide();
	for (var i=0; i<classArr.length; i++) {
		logos[i].removeAttribute("class");
		letter1.removeAttribute("id");
		letter2.removeAttribute("id");		
	}
}





