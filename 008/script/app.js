(function() {

    // Select all the elements we'll need
    var $modalOverlay = $("#modal-overlay");
    var $modalOverlayBox = $("#modal-overlay-box");
    var $modalOverlayOpenBtn = $("#open-modal-overlay");
    var $modalOverlayCloseBtn = $("#close-modal-overlay");
    var $submitBtn = $("#submit-btn");
    var $userNameInput = $("#username");
    var $passwordInput = $("#password");

    // Function to control UI
    $modalOverlayOpenBtn.on('click', function(e) {
        $modalOverlay.removeClass('hide');
    });

    $modalOverlayCloseBtn.on('click', function(e) {
        $modalOverlay.addClass('hide');
    });

    // Function to submit the form via ajax
    $submitBtn.on('click', function() {

        // Building our form payload
        var payload = {
            'username': $userNameInput.val(),
            'password': $passwordInput.val()
        };

        // Making the request
        var url = '../utils/login.php';
        $.post(url, { data: payload }, function(data) {
            console.log(data)
            if (data.status == "ok") {
                // Our user is loged in
                $modalOverlayOpenBtn.html("Logout!")
                $modalOverlay.addClass('hide');
            } else {
                repondToFormError();
            }
        });
    });

    // function that let the user know the form was incorect
    var repondToFormError = function repondToFormError() {
        $modalOverlayBox.addClass('error');
        setTimeout(function() {
            $modalOverlayBox.removeClass('error');
        }, 1000);
    }

})();