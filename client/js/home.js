Template.home.rendered = function () {
     $(document).ready(function(){
        $(window).scrollTop(0);
        $('.parallax').parallax();
        $('ul.tabs').tabs();
        $('.carousel').carousel();
        $('.collapsible').collapsible(); 
        $('.carousel.carousel-slider').carousel({
            fullWidth: true
        });
        Materialize.toast('欢迎来到悦宝园国际幼儿园!', 3000, 'rounded YBgreen') // 'rounded' is the class I'm applying to the toast
        var slideHeight = $(window).height();
        $(".home").height(slideHeight-80);
});
}