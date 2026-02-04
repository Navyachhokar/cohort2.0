function openFeatures(){
    var allElems = document. querySelectorAll('.elems');
    var containerElems = document. querySelectorAll('.allElems');
    var allFullElems = document.querySelectorAll('.fullElem');
    var FullElemsBackBtn = document.querySelectorAll('.back');
    
    allElems.forEach(function(elem){
        elem.addEventListener('click', function(){
            allFullElems[elem.id].style.display = 'block';
        })
    })
    
    FullElemsBackBtn.forEach(function(back){
        back.addEventListener('click', function(){
            allFullElems[back.id].style.display = 'none';
        })
    })
}
openFeatures();

function todoList(){
    let form = document.querySelector('.addTask form');
    let taskInput = document.querySelector('.addTask form input');
    let taskDetailsInput = document.querySelector('.addTask form textarea');
    let taskCheckbox = document.querySelector('.addTask form #check');
    
    var currentTask = [];
    
    if(localStorage.getItem('currentTask')){
        currentTask = JSON.parse(localStorage.getItem('currentTask'));    
    }else{
        console.log("task list is empty");
    }  
    
    function renderTask(){
        let allTask = document.querySelector('.allTask')
        let sum = '';
        currentTask.forEach(function(elem,idx){
            sum += `<div class="task" style="border:${elem.imp ? '2px solid rgb(255, 152, 101)'   :'transparent'}">
                        <details>
                            <summary style="list-style:none;">${elem.task}</summary>
                            <p>${elem.details}</p>
                        </details>
                        <button id="${idx}">Mark as Complete</button>
                    </div>`
        })
        allTask.innerHTML = sum;
        localStorage.setItem('currentTask',JSON.stringify(currentTask));

        var markCompletedBtn = document.querySelectorAll('.task button')
    
        markCompletedBtn.forEach(function(btn){
            btn.addEventListener('click',function(){
                currentTask.splice(btn.id,1);
                renderTask();
            })
        })
    }
    renderTask();
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let taskValue = taskInput.value;
        let taskDetailsValue = taskDetailsInput.value;
        let isImportant = taskCheckbox.checked;   
        currentTask.push(
            {
               task: taskValue,
               details: taskDetailsValue,
               imp: isImportant,
            }
        )
        taskInput.value = '';
        taskDetailsInput.value = '';
        taskCheckbox.checked = false;
        renderTask();
    })
}
todoList();
function dailyPlanner(){
    var hours = Array.from({length:18},function(_,idx){
    return `${String((6+idx) % 24).padStart(2, '0')}:00 - ${String((7+idx) % 24).padStart(2, '0')}:00`;
    })
    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData'))||{};
    
    var dayPlanner = document.querySelector('.day-planner');
    
    var wholeDaySum = ''
    hours.forEach(function(elem,idx){
        var savedData = dayPlanData[idx] || ''
        wholeDaySum += `<div class="day-planner-time">
                        <p>${elem}</p>
                        <input id="${idx}"type="text" placeholder="..." value=${savedData}>
                    </div>`;
    })
    dayPlanner.innerHTML = wholeDaySum;
    var dayPlannerInput = document.querySelectorAll('.day-planner input');
    
    dayPlannerInput.forEach(function(elem){
        elem.addEventListener('input',function(){
            dayPlanData[elem.id] = elem.value;
            localStorage.setItem('dayPlanData',JSON.stringify(dayPlanData));
        })
    })
}
dailyPlanner();