$(function() {
    // 设置第一个list的上边距
    $('.lists').first().css("margin-top", "20px");
    // 设置动画
    $('#logo').on("click", function() {
        $('.contain').animate({
            width: 'toggle'
        }, 500);
    });

    // 时间
    function dispTime() {
        var time = new Date();
        var str = time.getFullYear();
        str += "." + parseInt(time.getMonth() + 1);
        str += "." + time.getDate();
        str += " " + time.getHours();
        str += ":" + time.getMinutes();
        str += ":" + time.getSeconds();
        $('.showTime').html(str);
    }
    // setTimeout(dispTime(),1000)
    setInterval(function() { dispTime() }, 1000);
});