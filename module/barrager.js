module.exports = function () {
    // 弹幕
    var oColor = ["#ffffff", "#fbd70d", "#ff6262", "#0df3fb", "#74ff62"];
    var hhcarr = ["我是弹幕1","我是弹幕2","我是弹幕3","我是弹幕4","我是弹幕5"]
    var pageW = parseInt($(".barrage_list").width());
    var pageH = parseInt($(".barrage_list").height());;
    var boxDom = $(".barrage_list ul");
    var Top;
    var width;
    width = pageW;


    var a = -1;
    window.barrage=function () {
        if (a < hhcarr.length) {
            a++;
        } else {
            a = 0
        }
        var arrColor = Math.floor((Math.random() * oColor.length));
        var creSpan = $("<li></li>");
        creSpan.text(hhcarr[a]);
       // Top = Math.abs(parseInt(pageH * (Math.random() + 0.2)));
        Top =parseInt((Math.random()*(pageH-40)));
        creSpan.css({"top": Top, "right": 0, "color": oColor[arrColor], "font-size": ".24rem"});
        boxDom.append(creSpan);
        var spanDom = $(".barrage_list ul>li:last-child");

        spanDom.stop().animate({"right": pageW}, 10000, "linear", function () {
            $(this).remove();
        });
    }

    function tc_barrage() {
        var load_val
        load_val = setInterval('barrage()', 2000);

    }
    tc_barrage()

}
