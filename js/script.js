{
    let tasks = [];
    let hideDone = false;

    const addTask = (taskInput) => {
        tasks = [...tasks, { content: taskInput }];
        render();
    };

    const deleteTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const markAllAsDone = () => {
        tasks = tasks.map((task) => {
            if (task, done) {
                return task;
            }

            return {
                ...task,
                done: true,
            };
        });
        render();
    };

    const ToggleHideDone = () => {
        hideDone = !hideDone;
        render();
    };

    const triggerEvents = () => {
        const deleteButtons = document.querySelectorAll(".js-delete");

        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let taskHTMLContent = "";

        for (const task of tasks) {
            taskHTMLContent += `
              <li class="list__taskBody js-task">
              <button class="list__taskButton list__taskButton--checkMark js-done">
               ${task.done ? "✓" : ""}
              </button> 
              <span class="list__taskContent${task.done ? " list__taskContent--done" : ""}">
               ${task.content}</span>
              <button class="list__taskButton list__taskButton--delete js-delete">
              🗑
              </button>
             </li>
           `;
        }

        document.querySelector(".js-taskList").innerHTML = taskHTMLContent;

        triggerEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const taskInputElement = document.querySelector(".js-taskInput");
        const taskInput = taskInputElement.value.trim();

        if (taskInput !== "") {
            addTask(taskInput);
            taskInputElement.value = "";
        }

        taskInputElement.focus();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}