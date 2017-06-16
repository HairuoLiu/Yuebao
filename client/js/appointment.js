Template.appointment.rendered = function () {
    $(document).ready(function () {
        $('select').material_select();
    });
    $(document).ready(function () {
        $('phone,description').characterCounter();
    });
}
