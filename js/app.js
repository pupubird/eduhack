// countdown
var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minite = document.getElementById("minutes");
var second = document.getElementById("seconds");

function update_countdown() {
    // set date here at the new Date()
    var count = countdown(null, new Date("09/07/2019"), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

    day.innerText = count["days"];
    hour.innerText = count["hours"];
    minite.innerText = count["minutes"];
    second.innerText = count["seconds"];

}
setInterval(update_countdown, 1000);
// countdown ends

// collapsible for FAQ  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
//collapsible ends