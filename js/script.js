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
            if (task.done) {
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

    const renderTask = () => {
        const taskHTMLContent = task => `
            <li class="list__taskBody${task.done && hideDone ? " list__taskBody--hidden" : ""} js-task">
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
        const ListContent = document.querySelector(".js-taskList")
        ListContent.innerHTML = tasks.map(taskHTMLContent).join("");
    };

    const showMenu = () => {
        const menuContent = document.querySelector(".js-menu");

        if (!tasks.length) {
            menuContent.innerHTML = "";
            return;
        };

        menuContent.innerHTML = `
        <button class="menu__button js-toggleHideDone">
        ${hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button class="menu__button js-markAllAsDone"${tasks.every(({ done }) => done) ? " disabled" : ""}>
        Ukończ wszystkie
        </button>
        `;
    };

    const triggerMenuEvents = () => {
        const markAllAsDoneButton = document.querySelector(".js-markAllAsDone");

        if (markAllAsDoneButton) {
            markAllAsDoneButton.addEventListener("click", markAllAsDone);
        }

        const toggleHideDoneButton = document.querySelector(".js-toggleHideDone");

        if (toggleHideDoneButton) {
            toggleHideDoneButton.addEventListener("click", ToggleHideDone)
        }
    };

    const render = () => {
        renderTask();
        triggerEvents();
        showMenu();
        triggerMenuEvents();
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