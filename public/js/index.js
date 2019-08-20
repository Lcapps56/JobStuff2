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

var stateList = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AR", "Arkansas"],
  ["AZ", "Arizona"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["IA", "Iowa"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["MA", "Massachusetts"],
  ["MD", "Maryland"],
  ["ME", "Maine"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MO", "Missouri"],
  ["MS", "Mississippi"],
  ["MT", "Montana"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["NE", "Nebraska"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NV", "Nevada"],
  ["NY", "New York"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dekota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VA", "Virginia"],
  ["VT", "Vermont"],
  ["WA", "Washington"],
  ["WI", "Wisconsin"],
  ["WV", "West Virginia"],
  ["WY", "Wyoming"]
]