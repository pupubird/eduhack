

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */

        var panel = this.nextElementSibling;
        if (panel.style.display === "grid") {
            panel.style.display = "none";
        } else {
            panel.style.display = "grid";
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
    //accordion button
    var btn = document.createElement("DIV");
    btn.innerHTML = "Participant " + (form_ammount.length);
    btn.setAttribute("class", "accordion");

    formAccor.insertBefore(btn, plusPar);

    //participants details
    var div = document.createElement("DIV");

    div.innerHTML = `
    <div>
        <label for="par${form_ammount.length - 1}_name">Full Name</label>
        <input type="text" name="par${form_ammount.length - 1}_name">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_ic">IC/Passport Number</label>
        <input type="text" name="par${form_ammount.length - 1}_ic">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_gender">Gender</label>
        <select name="par${form_ammount.length - 1}_gender">
            <option selected>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="pref_not">Prefer not to say</option>
        </select>
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_mobile">Mobile phone</label>
        <input type="text" name="par${form_ammount.length - 1}_mobilephone">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_email">Email</label>
        <input type="email" name="par${form_ammount.length - 1}_email">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_university">University</label>
        <input type="text" name="par${form_ammount.length - 1}_university">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_programme">Programme</label>
        <input type="text" name="par${form_ammount.length - 1}_programme">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_tshirt">T-shirt size</label>
        <select name="par${form_ammount.length - 1}_tshirt">
            <option selected>Select</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
        </select>
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_vege">Vegetarian</label>
        <input type="checkbox" name="par${form_ammount.length - 1}_vege" id="vege">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_emer_contact">Emergency contact
            number</label>
        <input type="text" name="par${form_ammount.length - 1}_emer_contact">
    </div>
    <div>
        <label for="par${form_ammount.length - 1}_emer_contact_name">Emergency contact
            name</label>
        <input type="text" name="par${form_ammount.length - 1}_emer_contact_name">
    </div>
    
    `;
    console.log(form_ammount.length - 1);



    div.setAttribute("class", "panel");
    formAccor.insertBefore(div, plusPar);

    acc = document.getElementsByClassName("accordion");
    btn.addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "grid") {
            panel.style.display = "none";
        } else {
            panel.style.display = "grid";
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


