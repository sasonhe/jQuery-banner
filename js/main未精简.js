// 原始代码
$(function(){
    var i=0;
    var clone = $(".ban .onfocus li").first().clone();
    $(".ban .onfocus").append(clone);
    var size = $(".ban .onfocus li").size();
    for (var j = 0; j < size-1; j++) {
        $(".ban .num").append('<li></li>');
    };
    $(".ban .num li").first().addClass('activ');
    // 向左函数
    function prev(){
        i--;
        if (i==-1) {
            $(".ban .onfocus").css({'left': -(size-1)*1140});
            i=size-2;
        }
        $(".ban .onfocus").stop().animate({left: -i*1140}, 500);
        $(".ban .num li").eq(i).addClass('activ').siblings().removeClass('activ');
    };
    // 向左按钮
    $(".ban .prev").click(function() {
         prev();
    });
    // 向右函数
    function next(){
        i++;
        if (i==size) {
            $(".ban .onfocus").css('left', 0);
            i=1;
        }
        $(".ban .onfocus").stop().animate({left: -i*1140}, 500);
        if(i==size-1){
            $(".ban .num li").eq(0).addClass('activ').siblings().removeClass('activ');
        }else {
            $(".ban .num li").eq(i).addClass('activ').siblings().removeClass('activ');
        }
    };
    // 向右按钮
    $(".ban .next").click(function() {
        next();
    });
    // 鼠标hover
    $(".ban .num li").hover(function() {
        var index = $(this).index();
        i=index;
        $(".ban .onfocus").stop().animate({left: -index*1140}, 500);
        $(this).addClass('activ').siblings().removeClass('activ');

    });
    // 自动轮播
    var timer=setInterval(next,2000);
    // 鼠标移入停止轮播
    $(".ban").hover(function() {
        clearInterval(timer);
        $(".ban .btn").css('display', 'block');
    }, function() {
        timer=setInterval(next,2000);
        $(".ban .btn").css('display', 'none');
    });
})
