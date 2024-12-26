const API_URL = '/tasks';

// Fetch tasks and display them
const fetchTasks = async () => {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
};

// Render tasks
const renderTasks = (tasks) => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                ${task.description}
            </span>
            <div>
                <button onclick="toggleTask(${task.id}, ${task.completed})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
};

// Add task
const addTask = async () => {
    const taskInput = document.getElementById('task-input');
    const description = taskInput.value.trim();
    if (!description) return alert('Task description cannot be empty!');

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, completed: false }),
    });

    if (response.ok) {
        taskInput.value = '';
        fetchTasks();
    } else {
        alert('Failed to add task!');
    }
};

// Toggle task completion
const toggleTask = async (id, completed) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed }),
    });

    if (response.ok) {
        fetchTasks();
    } else {
        alert('Failed to update task!');
    }
};

// Delete task
const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    if (response.ok) {
        fetchTasks();
    } else {
        alert('Failed to delete task!');
    }
};

// Event listeners
document.getElementById('add-task-btn').addEventListener('click', addTask);
fetchTasks();
