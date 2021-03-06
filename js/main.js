// 简化代码
$(function(){
    var i=0;
    var clone = $(".ban .onfocus li").first().clone();
    $(".ban .onfocus").append(clone);
    var size = $(".ban .onfocus li").size();
    // 动态给ul添加宽度
    var oLiWith = $(".ban .onfocus li").first().width();
    $(".ban .onfocus").width(size*oLiWith);
    // 动态添加小圆点
    for (var j = 0; j < size-1; j++) {
        $(".ban .num").append('<li></li>');
    };
    $(".ban .num li").first().addClass('activ');

    // 公共函数
    function move(){
        if (i==size) {
            $(".ban .onfocus").css('left', 0);
            i=1;
        };
        if (i==-1) {
            $(".ban .onfocus").css({'left': -(size-1)*1140});
            i=size-2;
        };
        $(".ban .onfocus").stop().animate({left: -i*1140}, 500);
        if(i==size-1){
            $(".ban .num li").eq(0).addClass('activ').siblings().removeClass('activ');
        }else {
            $(".ban .num li").eq(i).addClass('activ').siblings().removeClass('activ');
        };
    };
    // 向右按钮
    $(".ban .next").click(function() {
        i++;
        move();
    });
    // 向左按钮
    $(".ban .prev").click(function() {
        i--;
        move();
    });
    // 鼠标hover
    $(".ban .num li").hover(function() {
        var index = $(this).index();
        i=index;
        $(".ban .onfocus").stop().animate({left: -index*1140}, 500);
        $(this).addClass('activ').siblings().removeClass('activ');

    });
    // 自动轮播
    var timer=setInterval(function(){
        i++;
        move();
    },2000);

    // 鼠标移入停止轮播
    $(".ban").hover(function() {
        clearInterval(timer);
        $(".ban .btn").css('display', 'block');
    }, function() {
        timer=setInterval(function(){
            i++;
            move();
        },2000);
        $(".ban .btn").css('display', 'none');
    });
})
