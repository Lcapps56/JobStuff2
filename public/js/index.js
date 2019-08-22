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

$("#formSubmit").on("click", function (event) {
  event.preventDefault();

  var newJob = {
    stateCode: $("#stateCode").val().trim(),
    occCode: $("#occCode").val().trim(),
    occTitle: $("#occTitle").val().trim(),
    totalEmployed: $("#totalEmployed").val().trim(),
    jobs1000: $("#jobs1000").val().trim(),
    locQ: $("#locQ").val().trim(),
    hMean: $("#hMean").val().trim(),
    aMean: $("#aMean").val().trim(),
    hMedian: $("#hMedian").val().trim(),
    aMedian: $("#aMedian").val().trim()
  };

  $.post("/api/jobs", newJob).then(function (data) {
    $("#stateCode").val("");
    $("#occCode").val("");
    $("#occTitle").val("");
    $("#totalEmployed").val("");
    $("#jobs1000").val("");
    $("#locQ").val("");
    $("#hMean").val("");
    $("#aMean").val("");
    $("#hMedian").val("");
    $("#aMedian").val("");
    window.location.assign("/")
  });
});
