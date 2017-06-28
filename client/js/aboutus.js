Template.aboutus.rendered = function () {
    $(document).ready(function(){
      $(window).scrollTop(0);
      $('.parallax').parallax(); 
      
      $('.materialboxed').materialbox();
$('.scrollspy').scrollSpy();
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    Materialize.toast('关于悦宝', 3000, 'rounded ppB') // 'rounded' is the class I'm applying to the toast
}
