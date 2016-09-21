//第二页
var srcArr = ["diqiu/1.jpg", "diqiu/2.jpg", "diqiu/3.jpg", "diqiu/4.jpg", "diqiu/5.jpg", "diqiu/6.jpg", "diqiu/7.jpg", "diqiu/8.jpg", "diqiu/9.jpg", "diqiu/10.jpg", "diqiu/11.jpg", "diqiu/12.jpg", "diqiu/13.jpg", "diqiu/14.jpg", "diqiu/15.jpg", "diqiu/16.jpg", "diqiu/17.jpg", "diqiu/18.jpg", "diqiu/19.jpg", "diqiu/20.jpg", "diqiu/21.jpg", "diqiu/22.jpg", "diqiu/23.jpg", "diqiu/24.jpg", "diqiu/25.jpg", "diqiu/26.jpg", "diqiu/27.jpg", "diqiu/28.jpg", "diqiu/29.jpg", "diqiu/30.jpg", "diqiu/31.jpg", "diqiu/32.jpg", "diqiu/33.jpg", "diqiu/34.jpg", "diqiu/35.jpg", "diqiu/36.jpg", "diqiu/37.jpg", "diqiu/38.jpg", "diqiu/39.jpg", "diqiu/40.jpg", "diqiu/41.jpg", "diqiu/42.jpg", "diqiu/43.jpg", "diqiu/44.jpg", "diqiu/45.jpg", "diqiu/46.jpg", "diqiu/47.jpg"];

//存src数组
//for (var i = 0;i<47;i++) {
//	srcArr.push("diqiu/"+(i+1)+".jpg");
//}
//console.log(srcArr);

var imgArr = [];
var count = 0;
var h = window.innerHeight;
var w = window.innerWidth;
var canvas = document.querySelector("#ctx");
canvas.width = w;
canvas.height = h;
var ctx = canvas.getContext("2d");
for (var i = 0; i < srcArr.length; i ++) {
	var img = new Image();
	img.src = srcArr[i];
	imgArr.push(img);
	img.onload = function(){
		count ++;
		if(count == srcArr.length){
			var i = 0;
			var h1 = imgArr[0].height;
			var w1 = imgArr[0].width;
			setInterval(function(){
				ctx.clearRect(0,0,w1,h1);
				ctx.drawImage(imgArr[i],0,0,w1,h1,0,0,w,h);
				ctx.save();
				i ++;
				if(i == imgArr.length){
					i = 0
				}
			},50)
			$(".diqiu1").addClass("diqiu11");
			$(".diqiu2").addClass("diqiu22");		
		}
	}
}
