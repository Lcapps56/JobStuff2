$(document).ready(function (event) {
  $("path").on("click", function () {
    var mapState = $(this).attr("aria-label").trim();
    console.log(mapState)
  })



  $("#submit").on("click", function (event) {
    var Values = {
      type: $("#type").val(),
      location: $("#location").val(),
      job: $("#jobsList").val()
    }
    console.log(Values)

    // $.ajax("/results",{
    // type: "POST",
    // data: Values
    // }).then(function(event){
    //   console.log("sent")
    // })
  })


  $(document).ready(function () {
    var jobs = []

    $.ajax({
      URL: "/api/jobs",
      type: "GET"
    }).then(function (response) {
      for (var i = 0; i < response.length; i++) {
        jobs.push(reponse[i].occ_title)
      }
      console.log(jobs)
      $("#jobsList").select2({
        data: jobs
      })
    })

  });

})