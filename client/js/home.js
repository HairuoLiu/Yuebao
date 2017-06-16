Template.home.rendered = function () {
    // $(document).ready(function(){
    // // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    //   $('.modal').modal();
    // });
    
     $(document).ready(function(){
        $('.scrollspy').scrollSpy();
        $('.slider').slider();
        $('.carousel').carousel();
    });
  
    // Start slider
    $('.slider').slider('start');

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

  
}
