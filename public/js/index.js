$("path").click(function(event){
  console.log("clicked")
})

$("#submit").on("click", function(event){
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

$(document).ready(function(){
  var jobs = ["one", "two", "three", "four", "five"]
  $("#jobsList").select2({
    data:jobs
  })
});