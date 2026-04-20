function toggleStyleSheet(){
    // Get style element by ID
    var element = document.getElementById("mainStyleSheet");
    
    // Check the current stylesheet file name
    var currentStyleSheet = element.getAttribute("href");

    // Determine new stylesheet file name
    var newStyleSheet;
    if (currentStyleSheet === "style1.css") {
        newStyleSheet = "style2.css";
    } else {
        newStyleSheet = "style1.css";
    }

    // replace stylesheet with new stylesheet
    element.setAttribute("href", newStyleSheet);

    // For persistence when page is refreshed. save new stylesheet name to localStorage
    localStorage.setItem("stylesheet", newStyleSheet);
}


window.onload = function(){
    // Make the last div color persist even when someone refreshes the page.
    // get stylesheet name from local storage
    var stylesheet = localStorage.getItem("stylesheet") || "style1.css";

    
    // get html style element by ID
    var element = document.getElementById("mainStyleSheet");
    
    // replace href attribute of html element.
    element.setAttribute("href", stylesheet);

    document.body.classList.add("loaded");
    
}


