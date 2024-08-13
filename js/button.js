$(document).on('click', '.navbar-nav>li>a, .dropdown-item', function() {
    if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
    }
});
