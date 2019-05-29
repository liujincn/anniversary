module.exports = function () {


    window.popup=function (tck) {

    $(".mask").height($(document).height()).fadeTo(250, 0.7)
    $(tck).css("left", ($(window).width() - $(tck).width()) / 2)
    $(tck).css("top", ($(window).height() - $(tck).height()) / 2)
    $(tck).show()
       /* if(tck='generate-dialog')
        {
            cutting()
            //alert("1111")
        }*/

    $(".close").click(function() {
        $(".mask").add(tck).hide();
    })
    }

}
