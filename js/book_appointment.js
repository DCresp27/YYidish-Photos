"use strict";

$(document).ready( function() {
    // Calculates Price based on Inputted Hours with Validation
    let price = $("#price"), numHours;
    $("#hours").change( function() {
        numHours = parseFloat( $("#hours").val() );
        if( numHours >= 1 && (numHours * 10) % 5 === 0 ) {
            price.val("$" + ( 149 + 99 * (numHours - 1) ) + "*");
        } else {
            price.val("Invalid");
        }
    });
});

let form = new Vue({
    el: "#vueForm",
    data: {
        states: [
            "Alabama", "Alaska", "Arizona", "Arkansas",
            "California", "Colorado", "Connecticut",
            "Delaware", "Florida", "Georgia", "Hawaii",
            "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
            "Kentucky", "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota", "Mississippi",
            "Missouri", "Montana", "Nebraska", "Nevada",
            "New Hampshire", "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio", "Oklahoma",
            "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
            "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ],
        labels: [
            "First Name", "Last Name",
            "Email", "Hours",
            "Total", "Date",
            "Address", "City",
            "State", "Zip Code",
            "Comments"
        ],
        fields: {
            firstName: "",
            lastName: "",
            email: "",
            hours: 1,
            total: "",
            date: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            comments: "",
        },
        submitted: false
    },
    methods: {
        updateFields() {
            this.fields.total = $("#price").val();
            this.fields.date = $("#date-picker").val();
            this.fields.state = $("#state").val();
        },
        confirmation() {
            this.updateFields();
            this.submitted = true;
            console.log(this.submitted);
        }
    }
});
