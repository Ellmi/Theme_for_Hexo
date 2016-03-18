function sendEmail() {
    $('#email [type=button]').attr('disabled','disabled');
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
    if (!$("#email [name=email]").val().match(/^(?=.{1,50}$)[a-z0-9A-Z]+@([a-z0-9A-Z]+\.){1,3}[a-z0-9A-Z]{2,4}$/))isValid = false;
    return isValid;
}
function showSuccessMessage() {
    var notification = $(".notification-area");
    notification.removeClass("error");
    notification.addClass("success");
    notification.text("email send successful!");
    $('#email [type=button]').removeAttr('disabled');
}
function showErrorMessage() {
    var notification = $(".notification-area");
    notification.removeClass("success");
    notification.addClass("error");
    notification.text("something wrong!");
    $('#email [type=button]').removeAttr('disabled');
}
