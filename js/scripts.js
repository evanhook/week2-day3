$(document).ready(function() {
  $("form").submit(function (event) {
    const name = ($("input#nameInput").val()).toUpperCase();
    const address = ($("input#addressInput").val()).toUpperCase();

    $("#spanName").text(name);
    $("#spanAddress").text(address);

    $("#postcard").show();

    event.preventDefault();
  });
});