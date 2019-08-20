$(document).ready(function () {

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
  ];

  // $("path").on("click", function () {
  //   var mapState = $(this).attr("aria-label").trim();
  // })

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var Values = {
      query: $("#type").val().trim(),
      state: $("#location").val().trim(),
      code: $("#jobsList").val().trim()
    }
    console.log(Values);
    $.ajax("/results", {
      type: "POST",
      data: Values
    }).then(function() {
      console.log("Post sent");
      $.ajax("/results", {
        type: "GET"
      }).then(function() {
        console.log("GET sent");
      });
    })
  });
});
