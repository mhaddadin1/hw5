//global letiables

//functions

// save task to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const tasks = $(this).siblings("textarea").val();
  localStorage.setItem(time, tasks);
}

// event listeners
//first listener show current date
$("#currentDay").text(moment().format("MMM Do, YYYY"));

function changeColor() {
  const now = moment().hour();
  $(".js-row").each(function () {
    const row = $(this);
    const rowHour = row.data("hour");

    if (rowHour < now) {
      $(this).addClass("past");
    } else if (rowHour === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

//grab tasks from local storage
$("#hour-9 .js-task").val(localStorage.getItem("hour-9"));
$("#hour-10 .js-task").val(localStorage.getItem("hour-10"));
$("#hour-11 .js-task").val(localStorage.getItem("hour-11"));
$("#hour-12 .js-task").val(localStorage.getItem("hour-12"));
$("#hour-1 .js-task").val(localStorage.getItem("hour-1"));
$("#hour-2 .js-task").val(localStorage.getItem("hour-2"));
$("#hour-3 .js-task").val(localStorage.getItem("hour-3"));
$("#hour-4 .js-task").val(localStorage.getItem("hour-4"));
$("#hour-5 .js-task").val(localStorage.getItem("hour-5"));
$("#hour-6 .js-task").val(localStorage.getItem("hour-6"));

//user clicks save area
$(".jsBtn").on("click", saveTask);
changeColor();
