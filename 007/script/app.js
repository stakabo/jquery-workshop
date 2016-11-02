(function() {

    // Select all the elements we'll need
    var modalOverlay = document.getElementById("modal-overlay");
    var modalOverlayBox = document.getElementById("modal-overlay-box");
    var modalOverlayOpenBtn = document.getElementById("open-modal-overlay");
    var modalOverlayCloseBtn = document.getElementById("close-modal-overlay");
    var submitBtn = document.getElementById("submit-btn");
    var userNameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Function to control UI
    var openModalOverlay = function openModalOverlay() {
        modalOverlay.style.display = 'flex';
    }

    var closeModalOverlay = function closeModalOverlay() {
        modalOverlay.style.display = 'none';
    }

    // Function to submit the form via ajax
    var submitLoginInfo = function submitLoginInfo() {

        // Building our form payload
        var payload = {
            'username': userNameInput.value,
            'password': passwordInput.value
        };

        // Init a new FormData and adding our feild value to it
        var data = new FormData();
        data.append("data", JSON.stringify(payload));

        // Making the request
        var url = '../utils/login.php';
        fetch(url, {
                method: "POST",
                body: data
            }).then(function(response) {
                if (response.ok) {
                    var contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json().then(function(json) {
                            // process your JSON further
                            console.log(json);
                            if (json.status == "ok") {
                                // Our user is loged in
                                closeModalOverlay();
                                modalOverlayOpenBtn.firstChild.data = "Logout";
                            } else {
                                repondToFormError();
                            }
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

    // function that let the user know the form was incorect
    var repondToFormError = function repondToFormError() {
        modalOverlayBox.className += " error";
        setTimeout(function() {
            modalOverlayBox.className = modalOverlayBox.className.replace(/(?:^|\s)error(?!\S)/g, '');
        }, 1000);
    }

    // Add event listener to ou elements
    modalOverlayCloseBtn.addEventListener("click", closeModalOverlay, false);
    modalOverlayOpenBtn.addEventListener("click", openModalOverlay, false);
    submitBtn.addEventListener("click", submitLoginInfo, false);

})();