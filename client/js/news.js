Template.news.rendered = function (){
     $(document).ready(function () {
        $('.carousel').carousel();
    });
    
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.collapsible').collapsible();

    $(document).ready(function(){
      $('.slider').slider();
    });
    
    // Start slider
    $('.slider').slider('start');
}

// Template.news.helpers({  
//     domain:function () {  
//         var new = document.createElement('new');  
//         new.href=this.url;  
//         return new.hostname;  
//     }  
// });