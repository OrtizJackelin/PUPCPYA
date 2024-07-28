$(document).ready(function() {
    $.ajax({
        url: "nav.html",
        success: function(data) {
            $("#nav-placeholder").html(data);
        },
        error: function(xhr, status, error) {
            console.error("Error loading navigation: ", status, error);
        }
    });
});