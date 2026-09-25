document.querySelector('#currentyear').innerHTML = `&copy;${new Date().getFullYear()} Chitungwiza Chamber of Commerce`;

document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

document.getElementById('timestamp').value = new Date().toISOString();
