Template.news.rendered = function (){
     $(document).ready(function () {
        $('.carousel').carousel();
        $('.slider').slider();
        $('.slider').slider('start');
    });
    
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.collapsible').collapsible();
    
    // Start slider 
}

// Template.news.helpers({  
//     domain:function () {  
//         var new = document.createElement('new');  
//         new.href=this.url;  
//         return new.hostname;  
//     }  
// });