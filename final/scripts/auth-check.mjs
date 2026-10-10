export function checkLogin(){
    if(!sessionStorage.getItem("name") && !sessionStorage.getItem("class")){
        window.location.replace("login.html");
    }
}