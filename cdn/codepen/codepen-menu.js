/*
** CUSTOM MENU FOR CODEPENS
** Description: Add a little menu to your codepen
** Author: http://codepen.io/Elbone/
** Version: 1.0
** Usage: 
   Roll your own: Edit and drop this into new js file on your site and link to it in the js pane of Codepen Editor.
   Use mine: Link to the github hosted version in the js pane of Codepen Editor
*/

function menu() {

	// Url
	var windowUrl = (window.location != window.parent.location) ? document.referrer : document.location;

	// Url set? Ok, proceed
	if (windowUrl) {

		// Fullscreen switching
		if (window.location.href.indexOf("/full/") > -1) {
			var url = windowUrl.replace("/full/","/pen/");
			var txt = "Code view";
		} else {
			var url = windowUrl.replace("/pen/","/full/");
			var txt = 'Fullscreen view &#9712;';
		}
		
		// Get the username
		href = windowUrl;
		href = href.replace('http://', "");
		href = href.split("/");
		usr = 'http://codepen.io/' + href[1];
	
		
		// Insert these	
		var html = '<ul><li><a href="' + url + '" target="_top">' + txt + '</a></li><li><a href="' + usr + '" target="_top">More &#10141;</a></li></ul>';
		var css = '#menu { background: #272727; position: fixed; top: 0; left: 0; width: 100%; padding: 6px; font-family: "Monaco", monospace; text-align: center; } #menu li { display: inline; padding: 6px 12px; } #menu li a { color: #fff; text-decoration: none; text-transform: uppercase; }';
		
		// Insert menu
		var menu = document.createElement('div');
		var navId = 'menu';
		menu.setAttribute('id',navId);
		menu.innerHTML = html;
		document.body.appendChild(menu);
		
		// Insert css
		var style = document.createElement('style');
		style.innerHTML = css;
		document.body.appendChild(style);
		
	}

}

// When ready
document.onload = menu();