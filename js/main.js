$( document ).ready(function() {
    $('#html').circliful();
    $('#css').circliful();
    $('#javascript').circliful();
    $('#jquery').circliful();
    $('#python').circliful();
    $('#php').circliful();
    $('#java').circliful();
    $('#laravel').circliful();
    $('#django').circliful();
    $('#linux').circliful();
                
    $("#contact").click(function(){
        $("#social").slideToggle();
    });


    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        if ($(window).width() <= 900) {
            $root.animate({
                scrollTop: $(href).offset().top - 125
            }, 500, function () {
                window.location.hash = href;
            });
        }else{
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
        };
        return false;
    });
});

