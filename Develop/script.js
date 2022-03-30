
var currentDate = function() {

    var now = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(now);    
}

var createTaskList = function() {    
    for (var i = 0; i < 9; i++) {              
        
        var taskContainer = document.createElement("div");
        taskContainer.classList = "row d-flex justify-content-center flex-wrap"
        taskContainer.setAttribute("id", "slot"+i);

        var taskEl = document.createElement("div");
        taskEl.classList = "hour pl-5 pt-3"                
        
        var textEl = document.createElement("textarea");
        textEl.classList = "w-75 text-weight-bold" 
        textEl.setAttribute("data-text-id", i);

        var btnEl = document.createElement("button");
        btnEl.classList = "saveBtn d-flex align-items-center justify-content-center p-4"
        btnEl.setAttribute("data-save-id", i);

        var iconEl = document.createElement("i");
        iconEl.classList = "fas fa-save"
        iconEl.setAttribute("data-save-id", i);

        var timeBlock = document.querySelector(".container")
        
        timeBlock.appendChild(taskContainer);
        taskContainer.append(taskEl, textEl, btnEl);
        btnEl.appendChild(iconEl);         
    }         
}

var createTimeList = function() {
    for (var i = 0; i < 10; i++) {
        var setTime = moment().set("hour", i+9)
        var dispTime = setTime.format("hA");
            
        var contSlot = document.getElementById("slot"+[i])
        var timeSlot = $(contSlot).find(".hour")
        var textSlot = $(contSlot).find("textarea")        
        $(timeSlot).text(dispTime); 

        if (moment(setTime).isBefore()) {
            $(textSlot).addClass("past");
        } else if (moment(setTime).isSame()) {
            $(textSlot).addClass("present");
        } else {
            $(textSlot).addClass("future");
        }    
    }  
}    

$(".container").on("click", "button", function(event) {
    var taskId = event.target.getAttribute("data-save-id");   
    var text = $("textarea[data-text-id='"+ taskId + "']").val().trim();  
    localStorage.setItem("tasks"+taskId, JSON.stringify(text))
})

var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks"+i)
    
    for (var i=0; i < 10; i++) {
        
    }    
}


loadTasks();
currentDate();
createTaskList();
createTimeList();