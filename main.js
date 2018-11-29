function showpic(whichpic){
    var source = whichpic.getAttribute('href');
    // var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    var text = whichpic.getAttribute('title');
    // var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}
var gollary = document.getElementById('gollary');
var link = gollary.getElementsByTagName('a');
for(var i=0;i<link.length;i++){
    link[i].onclick = function(){ 
        showpic(this);
        return false;  
    }
}