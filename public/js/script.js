//$("#burger-list").append($("<p>Hello World</p>"));

$("#burger-list").on("click", ".eat-button", function(event) {
  console.log("EAT IT clicked!");
  console.log(event);

  let newState = {
    devoured: true
  }

  $.ajax("/api/burgers/" + event.target.id, {
    type: "PUT",
    data: newState
  }).then(
    function() {
      location.reload();
    }
  )
})

$("#submit-burger").on("click", function(event) {
  event.preventDefault();
  
  handleBurgerSubmit($("#burger-name").val().trim());
})

function handleBurgerSubmit(burgerName) {
  newBurger = {
    burger_name: burgerName
  }

  return $.ajax("/api/burgers", {
    method: "POST",
    url: "api/burgers",
    data: newBurger
  }).then(function () { 
    location.reload();
  });
}

/*function getBurgerList() {
  $.get("/api/burgers/", function (data) {
    console.log(data);
  })
}*/

