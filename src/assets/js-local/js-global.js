// tabs
$(document).ready(function(){
    $('.tab').on('click', function(evt) {
      evt.preventDefault();
      $('.tab').removeClass('active');
      $(this).addClass('active');
      var sel = this.getAttribute('data-toggle-target');
      $('.tab-content').removeClass('active').filter(sel).addClass('active');
    });
  });

//custom file Input
$(document).ready(function() {
    $('.btn-file').on('click', function() {
      $(this).siblings('.file').trigger('click');
  
      $(this).siblings('.file').on('change', function() {
        var fileName = $(this)[0].files[0].name;    
        $(this).siblings('.file-name').val(fileName);
      });
      return false;
    });
  
  });
  
