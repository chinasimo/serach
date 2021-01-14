// 模糊查询
var data = [
    "朱宇豪",
    "朱宇",
    "罗艳婷",
    "朱",
    "吕翔",
    "宋佳",
];
$(document).ready(function() {
    $(document).keydown(function(e) {
        e = e || window.event;
        var keycode = e.which ? e.which : e.keyCode;

        if (keycode == 38) {
            if (jQuery.trim($("#append").html()) == "") {
                return;
            }
            movePrev();
        } else if (keycode == 40) {
            if (jQuery.trim($("#append").html()) == "") {
                return;
            }
            $("#search").blur();
            if ($(".item").hasClass("addbg")) {
                moveNext();
            } else {
                $(".item").removeClass('addbg').eq(0).addClass('addbg');
            }
        } else if (keycode == 13) {
            dojob();
        }
    });
    var movePrev = function() {
        $("#search").blur();
        var index = $(".addbg").prevAll().length;
        if (index == 0) {
            $(".item").removeClass('addbg').eq($(".item").length - 1).addClass('addbg');
        } else {
            $(".item").removeClass('addbg').eq(index - 1).addClass('addbg');
        }
    }
    var moveNext = function() {
        var index = $(".addbg").prevAll().length;
        if (index == $(".item").length - 1) {
            $(".item").removeClass('addbg').eq(0).addClass('addbg');
        } else {
            $(".item").removeClass('addbg').eq(index + 1).addClass('addbg');
        }
    }
    var dojob = function() {
        $("#search").blur();
        var value = $(".addbg").text();
        $("#search").val(value);
        $("#append").hide().html("");
    }
});

function getContent(obj) {
    var search = jQuery.trim($(obj).val());
    if (search == "") {
        $("#append").hide().html("");
        return false;
    }
    var html = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf(search) >= 0) {
            html = html + "<div class='item' onmouseenter='getFocus(this)' onClick='getCon(this);'>" + data[i] + "</div>"
        }
    }
    if (html != "") {
        $("#append").show().html(html);
    } else {
        $("#append").hide().html("");
    }
}

function getFocus(obj) {
    $(".item").removeClass("addbg");
    $(obj).addClass("addbg");
}

function getCon(obj) {
    var value = $(obj).text();
    $("#search").val(value);
    $("#append").hide().html("");
}
// 点击搜索
$(function() {
    $('#s_btn').click(function() {
        var name = $('#search').val();
        var name_url = name + ".html";
        location.href = name_url;
    })
})