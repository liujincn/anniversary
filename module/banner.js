// var $ = require('../lib/jquery')
module.exports = function () {
    // 弹幕
    var oColor = ["#0238ff", "#ff4f12", "#ff02f6", "#896401", "#ce0505", "#32ff59"];
    var oSize = ["20px", "20px", "20px", "20px", "20px", "20px", "20px"];
    var hhcarr = []
    var pageW = parseInt($(document).width());
    var pageH = parseInt(400);
    var boxDom = $(".barrage_list ul");
    var Top, Right;
    var width;
    width = pageW;


    var a = -1;

    function hhc() {
        if (a < hhcarr.length) {
            a++;
        } else {
            a = 0
        }
        $(".barrage_list li").width($(document).width());
        var arrColor = Math.floor((Math.random() * oColor.length));
        var arrSize = Math.floor((Math.random() * oSize.length));
        var creSpan = $("<li></li>");
        creSpan.text(hhcarr[a]);
        Top = Math.abs(parseInt(pageH * (Math.random() + 0.2)));
        creSpan.css({"top": Top, "right": -300, "color": oColor[arrColor], "font-size": oSize[arrSize]});
        boxDom.append(creSpan);
        var spanDom = $(".barrage_list ul>li:last-child");

        spanDom.stop().animate({"right": pageW + 300}, 10000, "linear", function () {
            $(this).remove();
        });
    }

    function tc_barrage() {
        var load_val
        load_val = setInterval('hhc()', 2000);

    }

    //显示隐藏弹幕
    $(".send_input em").click(function () {
        if ($(".send_input em").hasClass("xs1")) {
            $(".send_input em").addClass("xs2").removeClass("xs1")
            $(".barrage_list").hide();
        } else {
            $(".send_input em").addClass("xs1").removeClass("xs2")
            $(".barrage_list").show();
        }


    });
};
