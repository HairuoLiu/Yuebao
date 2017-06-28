Template.navbar.rendered = function () {
    $( document ).ready(function(){
        $(".button-collapse").sideNav();
    });

    // $('.pushpin').each(function () {
    //     var $this = $(this);
    //     var $target = $('#' + $(this).attr('data-target'));
    //     $this.pushpin({
    //         top: $target.offset().top,
    //         bottom: $target.offset().top + $target.outerHeight() - $this.height()
    //     });
    // });

    // $(document).ready(function () {
    //     $('.target').pushpin({
    //         top: 500,
    //         bottom: 1000,
    //         offset: 0
    //     });
    // });
}

Template.navbar.events({
    "click .logout": function (event) {
        Meteor.logout(function (err) {
            if (err) {
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else {
                Router.go('/');
                Bert.alert("您已登出", "success", "growl-top-right");
            }
        });
    },
});