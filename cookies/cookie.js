const consentBox = document.getElementById("consentBox");
const overlay = document.getElementById("overlay");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");
 
        acceptBtn.onclick = () => {
    sessionStorage.setItem("CookieBy", "ValorantOldalTeam");
    hidePopup();
    };
 
        rejectBtn.onclick = () => {
    hidePopup();
    };

    function hidePopup() {
        consentBox.classList.add("hide");
        overlay.classList.add("hide");
    }

    function showPopup() {
        consentBox.classList.remove("hide");
        overlay.classList.remove("hide");
    }

    window.onload = function() {
        if (sessionStorage.getItem("CookieBy") === "ValorantOldalTeam") {
            hidePopup();
        } else {
            showPopup();
        }
    }