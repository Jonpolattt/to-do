class Todo {
  constructor(text, completed = false) {
    this.id = Date.now();
    this.text = text;
    this.completed = completed;
  }
}

class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];

    this.list = document.querySelector(".todo-list");
    this.input = document.querySelector(".input");
    this.addBtn = document.querySelector(".add");
    this.darkBtn = document.querySelector(".dark-btn");

    this.init();
  }

  init() {
    this.addBtn.addEventListener("click", () => this.addTodo());

    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTodo();
    });

    this.darkBtn.addEventListener("click", () => this.toggleTheme());

    const theme = localStorage.getItem("theme");
    if (theme === "dark") document.body.classList.add("dark");

    this.render();
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo() {
    const text = this.input.value.trim();
    if (!text) return;

    const newTodo = new Todo(text);
    this.todos.push(newTodo);

    this.input.value = "";
    this.save();
    this.render();
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    this.save();
    this.render();
  }

  deleteTodo(id) {
    const el = document.querySelector(`[data-id="${id}"]`);

    el.classList.add("removing");

    setTimeout(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.save();
      this.render();
    }, 300);
  }

  render() {
    this.list.innerHTML = "";

    this.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.className = `todo-item ${todo.completed ? "completed" : ""}`;
      div.setAttribute("data-id", todo.id);

      div.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""}>
        <span>${todo.text}</span>
        <button class="delete-btn">❌</button>
      `;

      // toggle
      div.querySelector("input").addEventListener("change", () => {
        this.toggleTodo(todo.id);
      });

      // delete btn
      div.querySelector(".delete-btn").addEventListener("click", () => {
        this.deleteTodo(todo.id);
      });

      this.list.appendChild(div);

      setTimeout(() => {
        div.classList.add("show");
      }, 10);
    });
  }

  toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
}

new TodoApp();



// class Todo {
//   constructor(text, completed = false) {
//     this.id = Date.now();
//     this.text = text;
//     this.completed = completed;
//   }
// }

// class TodoApp {
//   constructor() {
//     this.todos = JSON.parse(localStorage.getItem("todos")) || [];

//     this.list = document.querySelector(".todo-list");
//     this.input = document.querySelector(".input");
//     this.addBtn = document.querySelector(".add");
//     this.darkBtn = document.querySelector(".dark-btn");

//     this.init();
//   }

//   init() {
//     this.addBtn.addEventListener("click", () => this.addTodo());

//     this.input.addEventListener("keypress", (e) => {
//       if (e.key === "Enter") this.addTodo();
//     });

//     this.darkBtn.addEventListener("click", () => this.toggleTheme());

//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") document.body.classList.add("dark");

//     this.render();
//   }

//   save() {
//     localStorage.setItem("todos", JSON.stringify(this.todos));
//   }

//   addTodo() {
//     const text = this.input.value.trim();
//     if (!text) return;

//     const newTodo = new Todo(text);
//     this.todos.push(newTodo);

//     this.input.value = "";
//     this.save();
//     this.render();
//   }

//   toggleTodo(id) {
//     this.todos = this.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo,
//     );

//     this.save();
//     this.render();
//   }

//   deleteTodo(id) {
//     const el = document.querySelector(`[data-id="${id}"]`);

//     el.classList.add("removing");

//     setTimeout(() => {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//       this.save();
//       this.render();
//     }, 300);
//   }

//   render() {
//     this.list.innerHTML = "";

//     this.todos.forEach((todo) => {
//       const div = document.createElement("div");
//       div.className = `todo-item ${todo.completed ? "completed" : ""}`;
//       div.setAttribute("data-id", todo.id);

//       div.innerHTML = `
//         <input type="checkbox" ${todo.completed ? "checked" : ""}>
//         <span>${todo.text}</span>
//         <button class="delete-btn">❌</button>
//       `;

//       // toggle
//       div.querySelector("input").addEventListener("change", () => {
//         this.toggleTodo(todo.id);
//       });

//       // delete btn
//       div.querySelector(".delete-btn").addEventListener("click", () => {
//         this.deleteTodo(todo.id);
//       });

//       this.list.appendChild(div);

//       setTimeout(() => {
//         div.classList.add("show");
//       }, 10);
//     });
//   }

//   toggleTheme() {
//     document.body.classList.toggle("dark");

//     const isDark = document.body.classList.contains("dark");
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }
// }

// new TodoApp();
