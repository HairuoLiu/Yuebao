Template.teacher.rendered = function () {
  
      $(document).ready(function () {
        $(window).scrollTop(0);
        $('ul.tabs').tabs();
        $('.carousel').carousel();
        $('.collapsible').collapsible(); 
        $('.materialboxed').materialbox();
        $('.parallax').parallax(); 
      });
      
      Materialize.toast('专业师资', 3000, 'rounded ppB') // 'rounded' is the class I'm applying to the toast
}
