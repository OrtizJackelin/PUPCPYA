$(document).on('click', '.navbar-nav>li>a, .dropdown-item', function() {
    if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
    }
});
/*$(document).ready(function () {
    // Close the navbar when a link is clicked, except for dropdown links
    $('.navbar-nav>li>a').on('click', function(){
        if(!$(this).hasClass('dropdown-toggle')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    $('.dropdown-item').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});*/