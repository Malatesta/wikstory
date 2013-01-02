function showPerson(n, name, show) {
    if (n.innerText.indexOf(name) != -1) {
        if (show)
            n.style.display = "";
        else
            n.style.display = "none";
    }
}

function updateTimer(year)
{
    document.getElementById("selected_year").innerHTML = year;
    document.getElementById("map").src = "img/maps/" + year + ".png";

    var people = document.getElementById("people").getElementsByClassName("person");
    var i;
    for (i = 0; i < people.length; i++) {
        var childNode = people[i];
        showPerson(childNode, "Churchill", year >= 1940);
        showPerson(childNode, "Stalin", year >= 1941);
        showPerson(childNode, "Roosevelt", year >= 1941);
    }
}

function showShortBio()
{
    document.getElementById("short_bio_hitler").style.display = "";
}

function closeShortBio(shortBioNode)
{
    shortBioNode.style.display = "none";
}

function closeShortBioMouse()
{
    //closeShortBio(document.getElementById("short_bio_hitler"));
}

function closeShortBioButton(button)
{
    closeShortBio(button.parentNode.parentNode.parentNode);
}
