// script.js
$(document).ready(function() {
    // Add new task
    $('#task-input').keypress(function(event) {
        if (event.which === 13) {
            const taskText = $(this).val().trim();
            if (taskText !== '') {
                const listItem = $('<li class="list-group-item"></li>');
                const deleteButton = $('<button class="btn btn-danger btn-sm float-right">Delete</button>');
                listItem.text(taskText);
                listItem.append(deleteButton);
                $('#task-list').append(listItem);
                $(this).val('');
            }
        }
    });

    // Delete task
    $(document).on('click', '.btn-danger', function() {
        $(this).parent().remove();
    });

    // Mark task as completed
    $(document).on('click', '.list-group-item', function() {
        $(this).toggleClass('completed');
    });
});
