var mySwiper = new Swiper('.swiper-container', {
	width : window.innerWidth,
	height : window.innerHeight,
	effect : 'cube',
	cube: {
	  slideShadows: true,
	  shadow: true,
	  shadowOffset: 100,
	  shadowScale: 0.6
	},
	loop : 'true',
	direction : 'vertical',
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
})



var srcArr = ["img/up.png","img/p_0000s_0000_左侧.png","img/p_0000s_0001_右侧.png","img/p_0000s_0003_图层-5.png","img/p_0000s_0002_2015-丝绸之路旅游年.png","img/p_0001s_0000s_0000_矢量智能对象.png","img/bg.jpg","img/p_0001s_0001s_0000_形状-2-拷贝-2.png","img/p_0001s_0000s_0001_图层-10-副本-3.png","img/p_0001s_0000s_0002_图层-9.png","img/p_0001s_0000s_0003_中国国家旅游局.png","img/p_0001s_0001s_0001_形状-2-拷贝.png","img/p_0001s_0001s_0002_形状-2.png","img/p_0003s_0001_BEAUTIFUL-副本.png","img/p_0002s_0000_内容.png","img/p_0003s_0000_主形象竖版.png","img/p_0003s_0002_CHINA-副本.png","img/p_0005s_0001_BEAUTIFUL-副本-2.png","img/p_0004s_0000_内容.png","img/p_0005s_0000_海报02.png","img/p_0007s_0000s_0000_1.png","img/p_0005s_0002_CHINA-副本-2.png","img/p_0006s_0000_内容.png","img/p_0009s_0000_BEAUTIFUL.png","img/p_0008s_0000_内容.png","img/p_0009s_0001s_0000_refresh.png","img/p_0009s_0001_CHINA.png","img/p_0009s_0000s_0000_Shape-5.png","img/p_0009s_0000s_0001_Shape-4-copy.png","img/p_0009s_0000s_0002_Shape-4-copy-2.png","img/p_0009s_0000s_0003_Shape-3-copy.png","img/p_0009s_0000s_0004_Shape-3.png","img/p_0009s_0001s_0002_开始.png","img/p_0009s_0001s_0001_开始.png","img/p_0009s_0001s_0003_暂停.png","img/p_0009s_0001s_0004_暂停.png","img/p_0009s_0002s_0000_美丽中国—2015丝绸之路旅游年.png","img/p_0009s_0002s_0001_图层-18.png"];
//,"img/福建海报.jpg","img/重庆海报.jpg","img/甘肃海报.jpg","img/广东海报.jpg","img/广西海报.jpg","img/河北海报.jpg","img/江苏海报.jpg","img/宁夏海报.jpg","img/青海海报.jpg","img/山东海报.jpg","img/陕西海报.jpg","img/上海海报.jpg","img/四川海报.jpg","img/新疆海报.jpg","img/云南海报.jpg","img/浙江海报.jpg"
var imgArr = [];
var load = document.getElementsByClassName("load")[0];
var inner = document.getElementsByClassName("inner")[0];
var container = document.getElementsByClassName("swiper-container")[0];
var p = load.getElementsByTagName("p")[0];
var count = 0;
//加载进度条	
for (var i=0; i<srcArr.length; i++) {
	var img = new Image();
	img.src = srcArr[i];
	img.onload = function(){
//				console.log(this);
		count++;
		imgArr.push(this);
		var num = parseInt(count / srcArr.length * 100);
		p.innerText = num + "%";
		inner.style.width = num + "%";
		if(count == srcArr.length){
			load.style.display = "none";
		}
	}
}
//第一页动画
var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");
var img = new Image();
var n = 0;
img.src = "img/up.png";
setInterval(function(){
	ctx.clearRect(0,0,60,60);
	ctx.drawImage(img,39*n,0,40,40,0,0,60,60);
	n++;
	if(n>=5){
		n = 0;
	}
},200)


//第三页点击事件
var p3 = document.querySelector(".p3");
var p3_1 = document.querySelector(".p3_1");
p3.onclick = function(){
	p3_1.style.display = "block";
}
p3_1.onclick = function(ev){
	ev.preventDefault();
	p3_1.style.display = "none";
}
//第五页点击事件
var p5 = document.querySelector(".p5");
var p5_1 = document.querySelector(".p5_1");
p5.onclick = function(){
	p5_1.style.display = "block";
}
p5_1.onclick = function(ev){
	ev.preventDefault();
	p5_1.style.display = "none";
}

//第七页
new ElastiStack( document.getElementById( 'elasticstack' ) );
var p7 = document.getElementsByClassName("p7")[0];
var container = document.getElementsByClassName("container")[0];
var btn = document.querySelector(".btn");
var p7_left1 = document.querySelector(".p7_left1");
var p7_left2 = document.querySelector(".p7_left2");
p7.onclick = function(){
	p7.style.display = p7_left1.style.display = p7_left2.style.display = "none";
	container.style.display = "block";
}
btn.onclick = function(){
	p7.style.display = p7_left1.style.display = p7_left2.style.display = "block";
	container.style.display = "none";
}

