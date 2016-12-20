/**
 * Created by 火星时代 on 2016/12/8.
 */
/*文化页面的tabs*/
$(function () {
    var box = $("#qczh");
    var aTxt = box.find('div .txt');
    aTxt.find('div').eq(0).show().siblings().hide();
    var aLi = box.find('div ul li');
    aLi.on('mouseover', function () {
        $(this).addClass('ac').siblings().removeClass('ac');
        var index = $(this).index();
        aTxt.find('div').eq(index).show().siblings().hide();
    });
    /*footer 导航hover事件*/
    var footter = $(".footer");
    footter.find('ul li').on('mouseover', function () {
        $(this).addClass('ac').siblings().removeClass('ac');
    })
    /*index banner 导航 hover事件*/
    var index_ban_nav = $("#index_ban_nav");
    var aLi = index_ban_nav.find('ul li');
    aLi.find('a').on('mouseover', function () {
        $(this).css({"z-index":1}).find('div').show().end().parents('li').siblings().find('a').css({"z-index":2}).find('div').hide();

    })

});