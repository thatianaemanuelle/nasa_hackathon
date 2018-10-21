$(document).ready(function () {

  function insert(nasaData) {
    nasaData.forEach((boxNasa, index) => {
      $(".all-boxes").append('<div id="' + index + '"class="nasadata"' + index + '"> <h1 class="nasadata-name">' + boxNasa.name + '</h1> <img src="' + boxNasa.image + '"width="30%">');
    });
  }
  insert(nasaData);

  $(".ocean-page").click(function () {
    event.preventDefault();
    window.location = "ocean.html"
  });

});