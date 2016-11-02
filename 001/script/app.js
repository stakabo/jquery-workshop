(function() {

    // selecting our elements
    var announcements = document.getElementsByClassName('announcement');

    // loop trought our elements
    for (var i = 0, l = announcements.length; i < l; i++) {
        console.log(announcements[i]);
        announcements[i].style.backgroundColor = 'red';
    }

    // A second click handler to fetch data via json
    var mySecondClickHandler = function mySecondClickHandler() {
        console.log("Fetching random");

        fetch('../utils/random.php').then(function(response) {
                if (response.ok) {
                    var contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json().then(function(json) {
                            for (var i = 0, l = announcements.length; i < l; i++) {
                                announcements[i].innerHTML = json.random_string;
                            }
                            console.log("Done loading the data");
                        });

                    } else {
                        console.log("Oops, we haven't got JSON!");
                    }

                } else {
                    console.log('Network response was not ok.');
                }
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

    }

    var myOtherBtn = document.getElementById('myOtherBtn');
    myOtherBtn.addEventListener('click', mySecondClickHandler)

    // A click handler
    var myClickHandler = function myClickHandler(el) {
        console.log("You clicked: ", el);
        el.parentNode.removeChild(el);
    }


    // select our buttons and add events listeners
    var myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', function() { myClickHandler(this) });
    

})();