$(document).ready(function () {
  $("#submit").on("click", function (event) {
    event.preventDefault();

    var query = $("#type").val().trim()
    var state = $("#location").val().trim()
    var code = $("#jobsList").val().trim()
    console.log(query, state, code)
    window.location.assign("/results/" + query + "/" + state + "/" + code)
  });
});