"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress = $("email").value;
    var errorMessage = "";

    // validate the entries
    if (emailAddress === "") {
        errorMessage = "First email address entry required";
        $("email").focus();}


    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage === "") {
        $("email_form").submit();
    } else {
        alert(errorMessage);
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email").focus();
};