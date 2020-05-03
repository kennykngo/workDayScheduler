$(document).ready(function () {
  var time = moment().format("dddd, MMMM Do YYYY");
  console.log(time);

  var currentDay = $("#currentDay");
  currentDay.text(time);
  console.log(currentDay);
});
