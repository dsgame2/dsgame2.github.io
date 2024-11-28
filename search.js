function search() {
    var eltext = document.getElementById('search').value.toLowerCase();
    var elements = document.getElementById('parentcontainer').children;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.textContent.toLowerCase().includes(eltext)) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
    const br = document.createElement("br");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.style.display != "none") {
            console.log(element.tagName)
            if (element.tagName == "A") {
                if (!element.innerHTML.includes("<br><br>")) {
                    element.innerHTML += "<br>"
                    element.innerHTML += "<br>"
                }



            }
        }

    }
    if (eltext == "") {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.tagName == "BR") {
                element.innerHTML = ""

            }
            else {
                removeAllBrNodes(element)
            }

        }
    }
}
function removeAllBrNodes(parentElement) {
    const brNodes = parentElement.querySelectorAll('br');
    brNodes.forEach(br => br.remove());
}