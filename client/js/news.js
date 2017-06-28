Template.news.rendered = function (){
     $(document).ready(function () {
         $(window).scrollTop(0);
        $('.carousel').carousel();
        $('.parallax').parallax(); 
        $('.slider').slider();
        $('.slider').slider('start');
        $('.collapsible').collapsible();   
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    
    // Start slider 
}

// Template.news.helpers({  
//     domain:function () {  
//         var new = document.createElement('new');  
//         new.href=this.url;  
//         return new.hostname;  
//     }  
// });