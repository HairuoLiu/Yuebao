Template.class.rendered = function () {
    $(document).ready(function(){
      $(window).scrollTop(0);
      $('.parallax').parallax(); 
    });
    Materialize.toast('课程介绍', 3000, 'rounded ppB') // 'rounded' is the class I'm applying to the toast

}