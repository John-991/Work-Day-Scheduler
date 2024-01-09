// Display today's day and date
const currentDate = dayjs();
const todayDate = currentDate.format('dddd, MMMM D YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
// Changes the color of each time block based on whether it's in the "past, present, or future" relative to the current time.
    function hourlyColor() {
        $('.time-block').each(function() {
            const blockHour = parseInt(this.id.split("hour")[1]);

            if (blockHour < currentDate.hour()) {
                $(this).removeClass('present future').addClass('past');
            } else if (blockHour === currentDate.hour()) {
                $(this).removeClass('past future').addClass('present');
            } else {
                $(this).removeClass('past present').addClass('future');
            }
        });
    }
   
    function timeTracker() {
        var nowTime = currentDate.hour(); // Get current hour
        // loop over time blocks
        $(".time-block").each(function () { 
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < nowTime) {
                $(this).removeClass("present future").addClass("past");
            } else if (timeBlock === nowTime) {
                $(this).removeClass("past future").addClass("present");
            } else {
                $(this).removeClass("present past").addClass("future");
            }
        })
    }

$(".descr").on("input", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).val();
    localStorage.setItem(hour, text);
});
    
     // Get item from local storage 
     $("#hour8 .descr").val(localStorage.getItem("hour8"));
     $("#hour9 .descr").val(localStorage.getItem("hour9"));
     $("#hour10 .descr").val(localStorage.getItem("hour10"));
     $("#hour11 .descr").val(localStorage.getItem("hour11"));
     $("#hour12 .descr").val(localStorage.getItem("hour12"));
     $("#hour13 .descr").val(localStorage.getItem("hour13"));
     $("#hour14 .descr").val(localStorage.getItem("hour14"));
     $("#hour15 .descr").val(localStorage.getItem("hour15"));
     $("#hour16 .descr").val(localStorage.getItem("hour16"));
     $("#hour17 .descr").val(localStorage.getItem("hour17"));
 
     timeTracker();
     hourlyColor();
});
