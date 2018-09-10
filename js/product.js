window.onload=function  () {
    //	导航条
    var lis_nav = document.getElementsByClassName("nav_title")[0].children;
    var lis_hide = $("nav_content").children;
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
    var lis=$("list_text").children;
    var uls=$("right_img").children;
    console.log(lis);
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function () {
            for(var i=0;i<lis.length;i++){
                lis[i].className="";
                uls[i].className="";
            }
            this.className="left_on";
            uls[this.index].className="main_active";
        }
    }

}