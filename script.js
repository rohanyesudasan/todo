const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="radio" name="task" class="radio-btn">
      <span>${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
    setupButtons(listItem);
  }
}

function setupButtons(listItem) {
  const editBtn = listItem.querySelector('.edit-btn');
  const deleteBtn = listItem.querySelector('.delete-btn');
  const radioBtn = listItem.querySelector('.radio-btn');

  deleteBtn.addEventListener('click', () => {
    const confirmation = confirm('Are you sure you want to delete this task?');
    if (confirmation) {
      listItem.remove();
    }
  });

  editBtn.addEventListener('click', () => {
    const newTaskText = prompt('Edit task:', listItem.querySelector('span').textContent);
    if (newTaskText !== null) {
      listItem.querySelector('span').textContent = newTaskText;
    }
  });

  radioBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });
}
