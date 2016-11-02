$(window).load(function() {
    $("#header").sticky({ topSpacing: 10 });
    $("#header").on('sticky-start', function() { $("#header").css("background-color", "red") });
});