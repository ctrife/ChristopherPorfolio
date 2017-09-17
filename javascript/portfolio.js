//Navigation code openPage takes in event, and the pageName
function openPage(evt, pageName) {
	//Creates global vairables used for the function.
    var i, tabContent, tablinks;
	//Sets tabContent to the specific element on the document.
    tabContent = document.getElementsByClassName("tabContent");
	//Then hides all the content.
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
	//finds set tablinks equal to the elements via the document
    tablinks = document.getElementsByClassName("tablinks");
	//removes the active attribute 
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	//gives the page name that was passed in a display style 
    document.getElementById(pageName).style.display = "block";
	// takes the event target thats click and passes the active class so content can be visable. 
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and simulates a click so that the home page content is visible on load. 
window.onload = function() {
	document.getElementById("defaultPage").click();
}


