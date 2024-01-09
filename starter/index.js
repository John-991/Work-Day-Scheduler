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
    for (var i = 8; i <= 17; i++) {
        var hourToString = "#hour" + i + " .descr";
        $(hourToString).val(localStorage.getItem("hour" + i));
    }
 
     timeTracker();
     hourlyColor();
});
