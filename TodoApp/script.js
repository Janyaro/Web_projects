let textbox = document.getElementById('todo-input');
let btn = document.getElementsByClassName('adddtodobtn')[0];
let listContainer =document.querySelector('.todo-item'); 
    btn.addEventListener('click' , () =>{
        if(textbox.value === ''){
            alert('Add todo elements')
        }else{
            let li = document.createElement('li');
            li.innerHTML = textbox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        
        }
        textbox.value = " ";
        saveData();
        
    });
    listContainer.addEventListener('click' , (e)=>{
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveData();
        }
        else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
    } , false)
  
    function saveData(){
        localStorage.setItem("data" , listContainer.innerHTML);
    }

    function displyData (){
      listContainer.innerHTML =  localStorage.getItem('data')   
    }
    displyData();
console.log('ntmtt');
