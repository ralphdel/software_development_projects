"use strict";
console.log("welcome to My to_do_list App");
let Savedtask = [];
function Saveinput() {
    let task = document.getElementById("inputtask");
    const mytask = task.value;
    task.value = "";
    //console.log(mytask);
    Savedtask.push(mytask);
    console.log(Savedtask);
    showtask();
}
function showtask() {
    let data = "";
    const tasktag = document.getElementById("taskList");
    for (const x of Savedtask) {
        const itemlist = `<li>${x}</li>`;
        data += itemlist;
        console.log(data);
    }
    tasktag.innerHTML = data;
}
/*function showtask() {
    const tasktag= document.getElementById("taskList") as HTMLOListElement
    //console.log(tasktag);
    Savedtask.forEach(task=>{
        const  itemlist= `<li>${task}</li>`
        tasktag.innerHTML= itemlist
           
        //console.log(itemlist);
        
        //let tasklisttag=tasktag.innerHTM
    })
        
    };

    */
