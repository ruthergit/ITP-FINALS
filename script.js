document.addEventListener("DOMContentLoaded", () => {
    const buttonAct = document.getElementById("submitBtn");

    buttonAct.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = 'frontpage.html';
    });
});
// Para sa login

// para sa front page
 
document.addEventListener("DOMContentLoaded", function() {
    const buttonNav = document.getElementById("buttonNav");
    const navChoices = document.getElementById("nav-choices");
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", (e) =>  {
        navChoices.style.transform = "translateX(33ch)";
    });

    buttonNav.addEventListener("click", (e) =>  {
        navChoices.style.transform = "translateX(0ch)";
    });
});
