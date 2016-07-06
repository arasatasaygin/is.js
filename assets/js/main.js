$(document).ready(function() {
    $('[data-typer-targets]').typer();
    $.typer.options.highlightSpeed    = 20;
    $.typer.options.typeSpeed         = 40;
    $.typer.options.clearDelay        = 1000;
    $.typer.options.typeDelay         = 200;
    $.typer.options.clearOnHighlight  = true;
    $.typer.options.typerInterval     = 4000;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1495) {
            $(".side-navigation").addClass("fixed");
        } else {
            $(".side-navigation").removeClass("fixed");
        }
    });
});
