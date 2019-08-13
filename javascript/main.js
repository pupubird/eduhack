
var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minite = document.getElementById("minutes");
var second = document.getElementById("seconds");

function update_countdown() {
    var count = countdown(null, new Date("09/07/2019"), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

    day.innerText = count["days"];
    hour.innerText = count["hours"];
    minite.innerText = count["minutes"];
    second.innerText = count["seconds"];
    second.classList.add("jumpy");

}
setInterval(update_countdown, 1000);

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var plusPar = document.getElementById("plusParticipant");
var formAccor = document.getElementById("form-accordian");
plusPar.addEventListener("click", () => {
    var form_ammount = document.getElementsByClassName("accordion");

    var btn = document.createElement("DIV");
    btn.innerHTML = "Participant " + (form_ammount.length);
    btn.setAttribute("class", "accordion");

    formAccor.appendChild(btn);

    var div = document.createElement("DIV");
    div.setAttribute("class", "panel");
    formAccor.appendChild(div);

    btn.addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });


    form_ammount = document.getElementsByClassName("accordion");

    if (form_ammount.length == 6) {
        plusPar.style.display = "none";
    }
});


