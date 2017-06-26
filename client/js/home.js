Template.home.rendered = function () {
     $(document).ready(function(){
        $('.parallax').parallax();
        $('ul.tabs').tabs();
        $('.carousel').carousel();

        Materialize.toast('欢迎来到悦宝园国际幼儿园!', 3000, 'rounded green') // 'rounded' is the class I'm applying to the toast
        
        $('.carousel.carousel-slider').carousel({
            fullWidth: true
        });

        var slideHeight = $(window).height();
        $(".home").height(slideHeight-80);
});
}