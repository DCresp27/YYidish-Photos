"use strict";

$(document).ready( function() {
    // Calculates Price based on Inputted Hours with Validation
    let price = $("#price"), numHours;
    $("#hours").change( function() {
        numHours = parseFloat( $("#hours").val() );
        if( numHours >= 1 && (numHours * 10) % 5 === 0 ) {
            price.val("$" + ( 149 + 99 * (numHours - 1) ) + "*");
            console.log(numHours, (numHours * 10) % 5, (numHours * 10) % 5 === 0 );
        } else {
            price.val("Invalid");
        }
    });
});

// Rome Date Picker
let today = new Date();
rome(document.querySelector("#date-picker"),
    {
        dateValidator: rome.val.only(today , new Date(today.getFullYear() + 1, today.getMonth(), today.getDay() ) )
    }
);
