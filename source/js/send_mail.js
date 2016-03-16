function sendEmail() {
    var name = $("#email [name=realname]").val();
    var address = $("#email [name=email]").val();
    var message = $("#email [name=message]").val();
    if (checkInfoValid()) {
        emailjs.send("gmail", "mail", {
            from_name: name,
            from_address: address,
            body: message
        }).then(function () {
            $("#email [name=realname]").val("");
            $("#email [name=email]").val("");
            $("#email [name=message]").val("");
            showSuccessMessage();
        }, function () {
            showErrorMessage();
        });
    } else {
        showErrorMessage();
    }
}
function checkInfoValid() {
    var isValid = true;
    if ($("#email [name=realname]").val() === "" || $("#email [name=message]").val() === "")isValid = false;
    if (!$("#email [name=email]").val().match(/^(?=.{1,50}$)[a-z]+@([a-z]+\.){1,3}[a-z]{2,4}$/))isValid = false;
    return isValid;
}
function showSuccessMessage() {
    var notification = $(".notification-area");
    notification.removeClass("error");
    notification.addClass("success");
    notification.text("email send successful!");
}
function showErrorMessage() {
    var notification = $(".notification-area");
    notification.removeClass("success");
    notification.addClass("error");
    notification.text("something wrong!");
}
