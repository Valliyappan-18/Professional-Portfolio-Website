// Designation auto update 2 seconds once

let role = document.querySelector('.Designation');

role.innerHTML = '';

const rolesArr = ['Software Engineer','Web Developer', 'Java Developer', 'Database Administrator','AWS Cloud Practitioner'];

let index = 0;

setInterval(()=>{
    if(index >= rolesArr.length){
        index = 0;
    }
    else{
        role.innerHTML = rolesArr[index];
        index++;
    }
},2000);

console.log('Script Running');