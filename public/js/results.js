$(document).ready(function(){
    var jobs = ["one", "two", "three", "four", "five"]
    $("#jobsList").select2({
      data:jobs
    })
  });