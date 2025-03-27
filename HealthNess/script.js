document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let notif = document.getElementById("notif");
    notif.style.display = "block";
    notif.style.opacity = 1;

    setTimeout(() => {
        notif.style.opacity = 0;
        setTimeout(() => {
            notif.style.display = "none";
            document.getElementById("contactForm").reset();
        }, 500);
    }, 2000);
});
