let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function addTaskPopup() {
            document.getElementById('overlay').style.display = 'block';
            document.querySelector('.popUp').style.display = 'block';
        }

        function addTask() {
            const taskName = document.getElementById('taskName').value;
            const category = document.getElementById('category').value;

            if (taskName && category) {
                const newTask = {
                     taskName,
                     category,
                     done: false
                     };
                tasks.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                document.getElementById('overlay').style.display = 'none';
                document.querySelector('.popUp').style.display = 'none';
                displayTasks(tasks);
            } else {
                alert('Please enter a task name and select a category.');
            }
        }

        function displayTasks(taskList) {
            const taskContainer = document.getElementById('add-taskList');
            taskContainer.innerHTML = '';

            taskList.forEach((task, index) => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('cards');
                taskDiv.innerHTML = `
                    <div id="span-label">
                        <br><span>Task : ${task.taskName}</span>
                        <br><label>Category : ${task.category}</label>
                        <br><label>Status: ${task.done ? 'Done' : 'Not Done'}</label>
                    </div>
                    <div id="btn">
                    <button onclick="toggleTaskStatus(${index})">${task.done ? 'Undo' : 'Done'}</button>
                    <button onclick="deleteTask(${index})">Delete</button></div>
                `;
                taskContainer.appendChild(taskDiv);
            });
        }

        function toggleTaskStatus(index) {
            tasks[index].done = !tasks[index].done;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks(tasks);
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks(tasks);
        }

        function showAllTasks() {
            displayTasks(tasks);
        }

        function showDoneTasks() {
            const doneTasks = tasks.filter(task => task.done);
            displayTasks(doneTasks);
        }

        function showNotDoneTasks() {
            const notDoneTasks = tasks.filter(task => !task.done);
            displayTasks(notDoneTasks);
        }

        window.onload = function() {
            displayTasks(tasks);
        };
