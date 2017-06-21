Template.home.rendered = function () {
     $(document).ready(function(){
        $('.scrollspy').scrollSpy();
        $('.slider').slider();
        $('.carousel').carousel();
        $('.modal').modal();
         // Start slider
        
    });
    
    $('.slider').slider('start');
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

}
