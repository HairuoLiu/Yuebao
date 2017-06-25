Template.home.rendered = function () {
     $(document).ready(function(){
        $('.parallax').parallax();
        $('ul.tabs').tabs();
        $('.scrollspy').scrollSpy();
        $('.slider').slider();
        $('.carousel').carousel();
        
        $('.modal').modal();
         // Start slider
        Materialize.toast('欢迎来到悦宝园国际幼儿园!', 3000, 'rounded green') // 'rounded' is the class I'm applying to the toast
        $('.slider').slider('start');
        $('.carousel.carousel-slider').carousel({
            fullWidth: true
        });
});

}
