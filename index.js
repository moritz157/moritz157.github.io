function learnMore(){
    var scrollTop = $("#header")[0].scrollHeight + 'px';
    console.log($("#header")[0].scrollHeight);
    $("body").animate({
        scrollTop: scrollTop
    }, 1000)
}