document.getElementById('new-task-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('new-task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        listItem.className = "flex justify-between items-center p-2 bg-white rounded-md shadow-sm mb-2";

        // Add delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = "bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline";
        deleteBtn.onclick = function() { 
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear input box
    } else {
        alert("Please enter a task!");
    }
}
