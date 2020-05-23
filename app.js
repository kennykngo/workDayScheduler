$(document).ready(function () {
  var date = moment().format("dddd, MMMM Do YYYY");

  var currentDay = $("#currentDay");
  currentDay.text(date);
  // var timeBlocks = $("#timeBlocks");

  var Date = moment().format("h");
  console.log(parseInt(Date));
  // $("#timeBlocks").text(Date.add("hours", 1));
  // for (var i = 0; i < 8; i++) {
  //   var current = moment().add(1, "hours").calendar;
  //   console.log(current);
  //   // console.log("hi");
  // }

  $("button").on("click", function () {
    var dataId = $(this).attr("id");
    var id = dataId.split("-")[0];
    // passes a string number
    var eleData = $("#" + id + "-input").val();
    // console.log(eleData);
    localStorage.setItem(id, eleData);

    console.log(id);
  });

  var currentTime = moment().hours();

  for (i = 9; i <= 17; i++) {
    $(`#${i}-input`).val(localStorage.getItem(i));

    if (i < currentTime) {
      $(`#${i}-input`).addClass("past");
    } else if (i === currentTime) {
      $(`#${i}-input`).addClass("present");
    } else {
      $(`#${i}-input`).addClass("future");
    }
  }

  console.log(currentTime);

  console.log(currentDay);
});
