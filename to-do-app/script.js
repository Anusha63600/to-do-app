$(document).ready(function () {

    // Add task function
    function addTask() {
        let taskText = $("#taskInput").val().trim();

        // Input validation
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        let li = $("<li></li>").text(taskText);

        // Delete button
        let deleteBtn = $("<button>Delete</button>");

        // Append delete button
        li.append(deleteBtn);

        // Add to list
        $("#taskList").append(li);

        // Clear input
        $("#taskInput").val("");
    }

    // Add button click
    $("#addBtn").click(function () {
        addTask();
    });

    // Enter key support
    $("#taskInput").keypress(function (e) {
        if (e.which === 13) {
            addTask();
        }
    });

    // Mark as complete (strike-through)
    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // Delete task
    $("#taskList").on("click", "button", function (e) {
        e.stopPropagation(); // prevent li click
        $(this).parent().remove();
    });

});