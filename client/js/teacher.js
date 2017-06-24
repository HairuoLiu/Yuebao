Template.teacher.rendered = function () {
      // $(document).ready(function () {
      //   $('ul.tabs').tabs('select_tab', 'tab_id');
      // });
      $(document).ready(function () {
        $('ul.tabs').tabs();
        $('.carousel').carousel();
        $('.collapsible').collapsible(); 
        $('.materialboxed').materialbox();

      });
      
      Materialize.toast('专业师资', 3000, 'rounded green') // 'rounded' is the class I'm applying to the toast
}
