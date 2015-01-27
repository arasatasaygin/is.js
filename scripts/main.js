$(document).ready(function() {
    $('[data-typer-targets]').typer();
    $.typer.options.highlightSpeed    = 20;
    $.typer.options.typeSpeed         = 40,
    $.typer.options.clearDelay        = 1000,
    $.typer.options.typeDelay         = 200,
    $.typer.options.clearOnHighlight  = true,
    $.typer.options.typerInterval     = 4000
});
