Template.tool.rendered = function () {
    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.fixed-action-btn.toolbar').openToolbar();
    $('.fixed-action-btn.toolbar').closeToolbar();

    $(document).ready(function() {
        $('.tooltipped').tooltip({
            delay: 50
        });
    });

    // window.external.AddFavorite(location.href,document.title)
}
