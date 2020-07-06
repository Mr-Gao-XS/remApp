// 改变html字体大小
function htmlFontSize() {
    var clientWidth = $(window).width();
    if (clientWidth > 769) {
        clientWidth = 750;
    }
    __rootrem = Math.floor(clientWidth * 100 / 750);
    $('html').css('font-size', __rootrem + "px");
}


// 调用函数改变字体大小
htmlFontSize();

$(window).resize(function () {
    htmlFontSize();
});


