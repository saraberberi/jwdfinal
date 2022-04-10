console.log("Connected");
// create task HTML function
let createTaskHTML = (name,description,assignedTo,dueDate,status) => {
    // string using template literals
   const html = `
   <tr id="taskTablData" style="vertical-align: top; text-align: center;">
   <td data-label='Task Name'>${name}</td>
   <td data-label="Task Description"${description}</td>
   <td data-label="Assigned To">${assignedTo}</td>
   <td data-label="Status">${status}</td>
   <td data-label="Due Date">${dueDate}</td>
   </tr> `

    //    const html = `<div class="card col-sm border border-dark" style="width: 18rem; background-color:#f5ececab; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s; margin: 2.5rem; margin-left: auto; margin-right: auto;align-items: center; justify-content: center; padding: 10px; box-sizing: border-box; border-radius: 26px; ">
//    <div class="card-body">
//      <h3 class="card-title">${name}</h3>
//      <p class="card-text"> ${description}</p>
//      <a href="#" class="btn btn-primary">${dueDate}</a>
//  </div>`;
    console.log(html);
     return html;
};

class  TaskManager {
    constructor(currentId ) { 
        this.tasks = [];
        this.currentId = 0; 
    }

    // create the addTask method
    addtask(name,description,assignedTo,dueDate,status){
       
      const task = {
             id: this.currentId++,
             name: document.querySelector('#addTaskName').value,
             description: document.querySelector('#addTaskDescription').value,
             assignedTo: document.querySelector('#addAssignedTo').value,
             dueDate: document.querySelector('#selectDueDate').value,
             status: document.querySelector('#selectStatus').value
        };

        

        this.tasks.push(task);
      //   console.log(task);
   }  
    
//    Step 2: render method() used to display task on the page
        render()  {
    //    create an array to store the tasks
            const tasksHtmlList = []; 
            const tasksHtmlVar = tasksHtmlList;
    //    loop over our tasks and create the html
            for(let i = 0 ; i <this.tasks.length; i++){       
        //     currentTask in loop
                 const currentTask = this.tasks[i];

            const newDate = new Date(currentTask.dueDate); 
        // styling how the date will appear 
         const formattedDate = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear(); 
         
         const taskHtml = createTaskHTML(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
       
         //  push into the array
         tasksHtmlList.push(taskHtml);
        //  console.log(taskHtml);
         // console.log(tasksHtmlList);
            }

        // Set the inner html of the tasksList on the page
            for(let i = 0; i < tasksHtmlList.length; i++){
                 const tasksList = document.getElementById('taskTableRow');
                tasksList.innerHTML =tasksHtmlList;
        }
         //  Create the tasksHtml by joining each item in the tasksHtmlList
    //     with a new line in between each item.
    //     seperate w. newline 
            const tasksHtml = tasksHtmlList.join('\n');
            const tasksList = document.querySelector('#taskTableRow'); 
            tasksList.innerHTML = tasksHtml;
    } 

   };
   
   const newTask = new TaskManager();
  


  

 