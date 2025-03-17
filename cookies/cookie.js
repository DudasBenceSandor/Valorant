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
        overlay.style.display="none"
    }

    function showPopup() {
        consentBox.classList.remove("hide");
        overlay.classList.remove("hide");
        overlay.style.display="block"
    }

    window.onload = function() {
        if (sessionStorage.getItem("CookieBy") === "ValorantOldalTeam") {
            hidePopup();
        } else {
            showPopup();
        }
    }