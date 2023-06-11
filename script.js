const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

function addTask(e){
    const pending =document.querySelector('.pending');
    const completed = document.querySelector('.completed');


    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');  
    
    
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';


    if(input.value ===''){
        alert("PLease add the task first");
    }
    else{
        newLi.innerHTML = input.value;
        input.value = '';
        pending.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });


    delBtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
    });

}