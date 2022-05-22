"use strict";

$(document).ready(function(){
    $( "#submit" ).click(function() {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag

        var name = $("#name").val();
        var email = $("#email_address").val();
        var phone = $("#phone").val();
        var textChoice = document.querySelector('#text');
        var emailChoice = document.querySelector('#email');

        if ( name === "" ||
            ! /^[a-zA-Z]+ ?[a-zA-Z]+$/.test(name) ) {
            isValid = false;
            $( "#name" ).next().text("Please enter your name.");
        }

        if ( email === "" ||
            ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email) ) {
            isValid = false;
            $( "#email_address" ).next().text("Please enter a valid email.");
        }

        if ( phone === "" || ! /^\d{3}-\d{3}-\d{4}$/.test(phone) ) {
            isValid = false;
            $( "#phone" ).next().text(
                "Please enter a phone number as NNN-NNN-NNNN.");
        }
        if(!textChoice.checked && !emailChoice.checked){
            isValid = false;
            $( "#email" ).next().text(
                "Please choose an option.");
        }
        if ( isValid ) {
            alert("Message Sent!");
        }
        $("#email").focus();
    });

    $('reset_form').click(function (){
        document.getElementById("registration_form").reset();
    })
});

window.onload = function() {
    $("join_list").onclick = joinList;

};
