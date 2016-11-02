(function() {

    // selecting our elements and changing some css
    $('.announcement').css('background-color', 'red');

    // Selecting and adding an event listener to our button
    $('#myBtn').on('click', function(e) {
        console.log("You clicked with jQuery");
        e.target.remove();
    });

    // Selecting and adding an event listener to our button and fetch some data via AJAX on click
    $('#myOtherBtn').on('click', function(e) {
        console.log("Fetching random");
        var url = "../utils/random.php";
        // Fatching some data with AJAX
        $.get(url, function(data) {
            $(".announcement").html(data.random_string);
            console.log("Done loading the data");
        });
    });

})();