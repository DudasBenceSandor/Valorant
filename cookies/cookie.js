const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");
 
        acceptBtn.onclick = () => {
    sessionStorage.setItem("CookieBy", "ValorantOldalTeam");
    consentBox.classList.add("hide");
    };
 
        rejectBtn.onclick = () => {
    consentBox.classList.add("hide");
    };
 
        if (sessionStorage.getItem("CookieBy") === "ValorantOldalTeam") {
    consentBox.classList.add("hide");
    } 
        else {
    consentBox.classList.remove("hide");
    }