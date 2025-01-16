const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksContainer = document.getElementById('tasks');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskElement = document.createElement('li');
    taskElement.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        tasksContainer.removeChild(taskElement);
    });

    taskElement.appendChild(taskContent);
    taskElement.appendChild(deleteBtn);

    tasksContainer.appendChild(taskElement);

    taskInput.value = '';
}

// Event listener for Add Task button
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
