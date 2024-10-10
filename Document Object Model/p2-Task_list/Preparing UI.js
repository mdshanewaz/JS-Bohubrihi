// Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);
// Define Function 
// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
        // Create li elemnt 
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if(confirm('Are u sure?')) {
            let ele = e.target.parentElement;
            ele.remove();
            // console.log(ele);
            removeFormLS(ele);
        }
    }
}

// clear task
function clearTask(e) {
    // taskList.innerHTML = '';
    // console.log('clicked')

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

// Filter task
function filterTask(e) {
    let text = e.target.value.toLowerCase();
    
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

// Task storage locally
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// load task after refresh
function getTasks(e) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ' '));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
    })
}

// Remove from local storage
function removeFormLS(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // let str = taskItem.textContent.trim;
    let li = taskItem;
    li.removeChild(li.lastChild); // <a> will be removed

    tasks.forEach((task, index) => {
        if(li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}