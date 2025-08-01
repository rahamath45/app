 let inputdata = document.getElementById("input-data");
let btn = document.getElementById("cal");
let memory = document.getElementById("memory");
let remove = document.getElementById("remove");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const userinput = inputdata.value;
    console.log(userinput);
    if(!userinput){
        return;
    }
    try{
          let result = eval(userinput)  ;
          inputdata.value = result
          console.log(result)
    }catch(error){
        console.log(error)
    }
})

memory.addEventListener("click",(e)=>{
   localStorage.setItem("memory",inputdata.value);
 
})

remove.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputdata.value ==""){
        return;
    }
   else{
       inputdata.value =""
   }
})

function display(num){
    inputdata.value+= num;
}

function del(){
    inputdata.value= inputdata.value.slice(0,-1)
}
 