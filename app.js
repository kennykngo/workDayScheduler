$(document).ready(function () {
  var date = moment().format("dddd, MMMM Do YYYY");

  var currentDay = $("#currentDay");
  currentDay.text(date);

  var Date = moment().format("h");
  console.log(parseInt(Date));

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
    var index = $(`#${i}-input`);
    index.val(localStorage.getItem(i));

    if (i < currentTime) {
      index.addClass("past");
    } else if (i === currentTime) {
      index.addClass("present");
    } else {
      index.addClass("future");
    }
  }

  console.log(currentTime);

  console.log(currentDay);
});
