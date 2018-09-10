window.onload=function  () {
	//bannner轮播
	// 添加元素，图片
	for(var i=0,str="";i<3;i++){
		str+="<li><a href='#'></a></li>"
	}
	$("banner_bg").innerHTML=str;
    var lis=$("slide").firstElementChild.children;
    for(var j=0,str2="";j<lis.length;j++){
        lis[j].firstElementChild.style.background="url(images/banner"+(j+1)+".png) no-repeat center 0";
        lis[j].style.left=$("slide").offsetWidth+"px";
    }
    lis[0].style.left=0;
	var timer=null,number=0;
	var spans=document.getElementsByClassName("btn")[0].children;
	timer=setInterval(autoPlay,2000);
	function autoPlay(){
		animate(lis[number],{left:-$("slide").offsetWidth});
		number++;
		if(number>2){
			number=0;
		}
		lis[number].style.left=$("slide").offsetWidth+"px";
		animate(lis[number],{left:0});
		for(var i=0;i<lis.length;i++){
			spans[i].className="";
		}
		spans[number].className="active";
	}
//	圆点控制轮播
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].onmouseover=function () {
			clearInterval(timer);
			for(var i=0;i<spans.length;i++){
				spans[i].className="";
				if(i>number){
					animate(lis[i],{left:$("slide").offsetWidth});
				}else{
					lis[i].style.left=-$("slide").offsetWidth+"px";
				}
			}
			this.className="active";
			animate(lis[this.index],{left:0});
			number=this.index;
		};
		spans[i].onmouseleave=function () {
            timer=setInterval(autoPlay,2000);
        }

	}
	$("slide").onmouseover=function () {
		clearInterval(timer);
    };
    $("slide").onmouseleave=function () {
		timer=setInterval(autoPlay,2000);
    };

//	文字向上自动滚动
	var scrollnew=document.getElementById("list");
	var scrollnew_lis=scrollnew.getElementsByTagName("li");
	var ml=0;
	var timer_list=setInterval(automove,2000);
	var timerli=setInterval(automoveli,10);
    var lisHeight=scrollnew_lis[0].offsetHeight;
		function automove() {
		timerli=setInterval(automoveli,10);
		}
			function automoveli() {
			scrollnew.scrollTop=(++ml);
			if(ml==lisHeight){
				clearInterval(timerli);
				scrollnew.scrollTop=0;
				ml=0;
                scrollnew_lis[0].parentNode.appendChild(scrollnew_lis[0]);
			}
        }

    $("list").onmouseover=function () {
		clearInterval(timer_list);
    };
    $("list").onmouseleave=function () {
        timer_list=setInterval(automove,2000);
    };
    $("arrow").onmouseover=function () {
        clearInterval(timer_list);
    };
    $("arrow").onmouseleave=function () {
        timer_list=setInterval(automove,2000);
    };
    //点击上下移动
	$("up").onclick=function () {
        timerli=setInterval(automoveli,10);
	};
	$("down").onclick=function () {
		var timer_down=setInterval(function () {
            scrollnew.scrollTop=(ml--);
            if(ml==(-lisHeight)){
                clearInterval(timer_down);
                scrollnew.scrollTop=0;
                ml=0;
                scrollnew_lis[0].parentNode.insertBefore(scrollnew_lis[9],scrollnew_lis[0]);
            }

        },10)
	};
//行业介绍
	$("left").onmouseover=function () {
		animate($("left_img"),{left:-20});
		animate($("text1"),{bottom:0});
		$("left_text").style.background="rgba(0,0,0,0.35)";
    };
    $("left").onmouseleave=function () {
        animate($("left_img"),{left:0});
        animate($("text1"),{bottom:-25});
        $("left_text").style.background="rgba(0,0,0,0)";
    };
    $("right_top").onmouseover=function () {
        animate($("img_top"),{left:-20});
        animate($("text2"),{bottom:0});
        $("r_top").style.background="rgba(0,0,0,0.35)";
    };
    $("right_top").onmouseleave=function () {
        animate($("img_top"),{left:0});
        animate($("text2"),{bottom:-25});
        $("r_top").style.background="rgba(0,0,0,0)";
    };
    $("right_bottom").onmouseover=function () {
        animate($("img_bottom"),{left:-20});
        animate($("text3"),{bottom:0});
        $("r_bottom").style.background="rgba(0,0,0,0.35)";
    };
    $("right_bottom").onmouseleave=function () {
        animate($("img_bottom"),{left:0});
        animate($("text3"),{bottom:-25});
        $("r_bottom").style.background="rgba(0,0,0,0)";
    };
//	导航条
    var lis_nav = document.getElementsByClassName("nav_title")[0].children;
    var lis_hide = $("nav_content").children;
    console.log(lis_hide.length);
    for (var i = 0; i < lis_nav.length; i++) {
        lis_nav[i].index = i;
        lis_nav[i].onmouseover = function () {
            for (var i = 0; i < lis_nav.length; i++) {
                lis_nav[i].className = "";
                animate(lis_hide[i], {height: 0});
                lis_hide[i].className = "";
                // animate(lis_hide[2],{height:0});
            }
            if (this.index > 0 && this.index < 4) {
                animate(lis_hide[this.index], {height: 0});
                this.className = "on";
            } else {
                this.className = "on";
                animate(lis_hide[this.index], {height: 74});
                lis_hide[this.index].className = "nav_on";
            }
        }
        lis_nav[i].onmouseleave = function () {
            this.className = "on";
            // animate(lis_hide[this.index], {height: 0});
        }
        lis_hide[i].onmouseleave=function () {
			animate(this,{height:0});
        }

    }
//	固定栏
//	点击弹出电话
    $("icon_phone").onclick = function () {
        if ($("tel").style.display == "block") {
            $("tel").style.display = "none";
        } else {
            $("tel").style.display = "block";
        }

    }
// 遮罩层
    $("icon_online").onclick = function (e) {
        e.stopPropagation();
        $("bigbg").style.display = "block";
    }
    document.onclick = function (e) {
        var targetId = (e.target) ? e.target.id : e.srcElement.id;
        if (targetId == "close") {
            $("bigbg").style.display = "none";
        }
    }

}