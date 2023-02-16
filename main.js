const isValidUrl = urlString =>{
    var inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    if (!inputElement.checkValidity()) {
        return false;
    } else {
        return true;
    }
}


let button = document.getElementById("Firstbtn");

button.onclick = function () {
    let button = "www.jsowl.com";
    alert(isValidUrl(button));
}

let Secondbtn = document.getElementById("Secondbtn");
Secondbtn.onclick = function () {
    let Secondbtn = "https://www.jsowl.com";
    alert(isValidUrl(Secondbtn));
}






