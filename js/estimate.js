"use strict";

$(document).ready( function() {
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