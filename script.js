let tabLinks = document.getElementsByClassName("tab-links");
let skillsInfills = document.getElementsByClassName("skills-infill");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(skillInfill of skillsInfills){
        skillInfill.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
