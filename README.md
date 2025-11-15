# To-Do List

> This is a functional and fully interactive **To-Do List** application. It was developed to master key concepts in **JavaScript DOM manipulation** and modern **CSS layout techniques**.
>
> This project was created as part of learning Front-end fundamentals.
>
> Language of the page: **Polish**
>

<img
  src="images/icon.png"
  alt="To-Do List application icon"
  width="200"
/>

---

## Demo

**Check the website:** [https://mg-wiewiora.github.io/to-do-list-improved/](https://mg-wiewiora.github.io/to-do-list-improved/)

---

## Functionality

The main goal was to build a full **CRUD (Create, Read, Update, Delete)** application logic and implement advanced list management mechanisms using **Vanilla JavaScript**.

**Key Features:**

* **CRUD Operations:** Users can add, toggle the status, and permanently delete tasks.
* **Filtering:** Ability to **Hide/Show** completed tasks.
* **Bulk Actions:** Option to **Mark All** tasks as complete.
* **State Management:** The application state is managed and modified using **immutable practices** in JavaScript.

---

## Technologies

This project emphasizes clean separation of concerns and modern standards.

* **HTML5:** Semantic structure and clear heading hierarchy.
* **CSS3:** Used for advanced styling and layout.
    * **Layout:** Utilizes both **CSS Grid** (for the form, list items, and section containers) and **Flexbox** (for the action menu).
    * **Responsiveness:** Implemented using **Media Queries** to ensure a mobile-friendly layout for all components.
    * **Utilities:** **Normalize.css** and `box-sizing: border-box` are used for consistent rendering.
* **Modern JavaScript:** Logic handling all interactivity, **immutable state management**, and dynamic DOM rendering.

---

## Learning Points & Focus

This project provided practical experience with:

1.  **Advanced CSS Layout:** Practical implementation of **CSS Grid** and **Flexbox** within a single, fully responsive project structure.
2.  **State Management (Immutability):** Updating the core data array using **immutable techniques** (spread operator `...`, `.slice`, `.map`) to avoid direct state mutation.
3.  **Dynamic DOM Manipulation:** Full re-rendering of the view (`render()`) after every state change for a clean view update cycle.
4.  **Code Structure & Scope:** Applying the **principle of least exposure** by using named, functional blocks (e.g., `addTask`, `render`) and declaring all variables as **local** (`const`/`let`), preventing global scope pollution and improving code predictability.

---

![gif - how to interact with the page](https://github.com/user-attachments/assets/de709230-e0b0-4430-b093-5ccd502f971a)


![gif - responsiveness of the page](https://github.com/user-attachments/assets/d06dd349-f56d-4026-973d-416ffb2d66f6)


## Author

**Małgorzata Wiewióra** - [my GitHub profile](https://github.com/mg-wiewiora)
