document.querySelector('#currentyear').innerHTML = `&copy;${new Date().getFullYear()} Chitungwiza Chamber of Commerce`;

document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

const timestamp = document.getElementById('timestamp');

if(timestamp){
    timestamp = document.getElementById('timestamp').value = new Date().toISOString();
}