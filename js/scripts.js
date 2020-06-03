$(document).ready(function() {
  $("form").submit(function (event) {
    const name = $("input#nameInput").val();
    const address = $("input#addressInput").val();

    $("#spanName").text(name);
    $("#spanAddress").text(address);

    $("#postcard").show();

    event.preventDefault();
  });
});