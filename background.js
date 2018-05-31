// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "ContextMenu",
      "title": "Look up in Globe Stylebook...",
      "contexts": ["selection"]
    });
  });
  	
// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  // addHistory(sText);
  var url = "http://stylebook.colo.theglobeandmail.com/search?q=" + encodeURIComponent(sText);  
  window.open(url, 'newwindow', 'width=600,height=700');
};

chrome.commands.onCommand.addListener(function(command) {
	if (command == "execute_click_event") {
		var sText = info.selectionText;
  		// addHistory(sText);
  		var url = "http://stylebook.colo.theglobeandmail.com/search?q=" + encodeURIComponent(sText);  
  		window.open(url, 'newwindow', 'width=600,height=700');
	}
	});

// register the handler 
// document.addEventListener('keydown', doc_keyDown);

// Bind shortcut to handler
// function doc_keyDown(e) {
	//if (e.altKey && e.shiftKey && e.keyCode || e.which == 70) {
	//	e.preventDefault();
	//	var sText = info.selectionText;
  	//	// addHistory(sText);
  	//	var url = "http://stylebook.colo.theglobeandmail.com/search?q=" + encodeURIComponent(sText);  
  	//	window.open(url, '_blank');
	// }
 // };