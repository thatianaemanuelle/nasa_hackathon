$(document).ready(function () {

  function insert(nasaData) {
    nasaData.forEach((boxNasa, index) => {
      $('.content').append('<div id="' + index + '"class="nasadata"' + index + '"> <h1 class="nasadata-name">' + boxNasa.name + '</h1> <img src="' + boxNasa.image + '"width="30%">');
      $('#' + index).click(function () {
        $('.content').append('<div class="modal" id="modal' + index + '" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">' + name + '</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"><img src="' + boxNasa.image + '" width="200px" height="200px"><p>' + boxNasa.description + '</p> <strong>' + boxNasa.type + '</strong> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div> </div> </div> </div>');
      });
    });
  }
  insert(nasaData);

  // $('.type').each(function () {
  //   $(this).on('click', function () {
  //     searchByType($(this).val());
  //   });
  // })

  // function searchByType(el) {
  //   $('strong').each(function () {
  //     if ($(this).text() !== el) {
  //       $(this).parent().fadeOut('slow');
  //     } if ($(this).text() === el) {
  //       $(this).parent().fadeIn('slow');
  //     }
  //   })
  // }

  // $('.input').on('keyup', function () {
  //   $('.restaurant-name').parent().stop().fadeOut('slow');
  //   $('.restaurant-name').each(search);
  // });

});