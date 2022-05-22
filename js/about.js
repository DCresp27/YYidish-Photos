
$(document).ready(function(){
    $("#submit").click(function(){
        var isValid = true;
        var email = $("#email").val();
        if(email === "" || !/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email)) {
            isValid = false;
            $("#signup").next().text("Please enter a valid email.");
        }
        if (isValid) {
            $("#message").hide();
            $("#signup").hide();
            $("#box").load("../html/ajaxAbout.html");
        }



    });
});
