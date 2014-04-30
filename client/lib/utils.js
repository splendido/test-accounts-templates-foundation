
setActiveLinks = _.debounce(function() {
    $("ul.left li.active").removeClass('active');
    $("ul.left li a[href='" + location.pathname + "']").parent().addClass('active');
});