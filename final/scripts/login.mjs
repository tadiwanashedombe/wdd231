const form = document.querySelector("#loginForm");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const loginClass = document.getElementById("class").value.trim();

    if(!name || !loginClass) return;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("class", loginClass);

    const logins = JSON.parse(localStorage.getItem("logins" )|| "[]");
    logins.push({name, class: loginClass});
    localStorage.setItem("logins",JSON.stringify(logins));

    window.location.href = "index.html";
});