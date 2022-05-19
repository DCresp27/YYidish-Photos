var header = Vue.component('templateHeader', {
    template:
        "<nav class=\"navbar\">\n" +
        "    <a class=\"navbar-brand\" href=\"index.html\">\n" +
        "        <img id=\"logo\" src=\"../Pictures/Logo/Logo-Olive_Drab_7.png\" alt=\"YYDISH Photos Logo\">\n" +
        "    </a>\n" +
        "    <div class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"portfolio.html\">Portfolio</a>\n" +
        "    </div>\n" +
        "    <div class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"about.html\">About</a>\n" +
        "    </div>\n" +
        "    <div class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"estimate.html\">Estimate</a>\n" +
        "    </div>\n" +
        "    <div class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"book_appointment.html\">Book</a>\n" +
        "    </div>\n" +
        "    <div class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n" +
        "    </div>\n" +
        "</nav>"
})

let footer = Vue.component('templateFooter', {
    template:
        "<ul class=\"footerNavbar\">\n" +
        "    <li>\n" +
        "        <a href=\"index.html\">Homepage</a>\n" +
        "    </li>\n" +
        "    <li>|</li>\n" +
        "    <li>\n" +
        "        <a href=\"portfolio.html\">Portfolio</a>\n" +
        "    </li>\n" +
        "    <li>|</li>\n" +
        "    <li>\n" +
        "        <a href=\"about.html\">About</a>\n" +
        "    </li>\n" +
        "     <li>|</li>\n" +
        "    <li>\n" +
        "        <a href=\"estimate.html\">Get an Estimate</a>\n" +
        "    </li>\n" +
        "    <li>|</li>\n" +
        "    <li>\n" +
        "        <a href=\"book_appointment.html\">Book an Appointment</a>\n" +
        "    </li>\n" +
        "</ul>"
});

let head = new Vue({
    el: "#header",
    components: {
        'header': header
    }
});

let foot = new Vue({
    el: "#footer",
    components: {
        'footer': footer
    }
});
