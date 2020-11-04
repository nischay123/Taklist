// // Define UI Vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);
// }

// // Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }


const taskInput = document.querySelector('#task'),
      addbtn   = document.querySelector('.btn'),
      collection = document.querySelector('ul.collection'),
      filter = document.querySelector('#filter'),
      licollection = document.querySelectorAll('.collection-item'), 
      clrbtn = document.querySelector('.clear-tasks.btn.black')
      
function loadEventListeners(){
  addbtn.addEventListener('click' , addTask);
  filter.addEventListener('keyup' , filtertask);
  clrbtn.addEventListener('click' , Cleartask);
  collection.addEventListener('click' , clearList);
}
function clearList(e){
  if(e.target.parentElement.classList.contains('delete-item')){
      console.log(e.target.classList);
      e.target.parentElement.parentElement.remove();
  }
       e.preventDefault();
}

function Cleartask(e){
    console.log(document.querySelectorAll('.collection-item'));
    collection.innerHTML ='';
    e.preventDefault();
}

function filtertask(e){
   var filtervalue = e.target.value.toLowerCase();
  
   console.log(document.querySelectorAll('.collection-item'));
    document.querySelectorAll('.collection-item').forEach(ele =>{
      var item =  ele.innerText;
      if(item.toLowerCase().indexOf(filtervalue)!=-1){
        ele.style.display = 'block';
      }else{
        ele.style.display = 'none';
      }
    
   })
    e.preventDefault();
}

function addTask(e){
  var val = taskInput.value;
  if(val=== ''){
    return ;
  }
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(val));
  li.className ='collection-item';

  var a =  document.createElement('a');
  a.className = "delete-item secondary-content";
   a.innerHTML = '<i class="fa fa-remove">  </i>'
   li.appendChild(a);
  
  
  collection.appendChild(li);
  
  taskInput.value = '';
  e.preventDefault();
}

loadEventListeners();