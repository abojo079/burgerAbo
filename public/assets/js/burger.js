$(function() {
  $(".munchburger").on("click", function(event) {
    const id = $(this).data("id");
    const devouredState = {
      devoured: 1
    };


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger Devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };


  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log(`deleted burger ${id}`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
