window.onload=init;

function init(){
	commentcount = -1;
	var submit = document.getElementById("submit");
	submit.onclick = postComment;
    loadAllComments();
	form1 = document.getElementById("Username");
	form2 = document.getElementById("CommentsField");
	form1.onclick = changeInput;
	form2.onclick = changeInput;
	document.getElementById("usercom").innerHTML = "Nobody has posted a comment yet. Be the first to comment on this post!";
}

function postComment(){
	commentcount = commentcount + 1;   
    var userName = document.getElementById("Username").value; //Nimmt was im felder steht
    var com = document.getElementById("CommentsField").value;

    localStorage.setItem("Username" + commentcount, userName); // Speichert im localstorage  
    localStorage.setItem("Comment" + commentcount, com); 
                    
    loadAllComments(); // ladt neue Kommentare
}                
                
function loadAllComments(){
    var allcom = ""; 
    for (var i=0; i<=commentcount; i++){ // Jeder Kommentar hat sozusagen "id" deswegen können wir alle mit schleife zugreifen
		var userName = localStorage.getItem("Username"+i); // i - ist "id" für jeder Kommentar
		var comment = localStorage.getItem("Comment"+i);
		var colorUser = userName.fontcolor("green");
		allcom += "User " + colorUser + " commented:" + "<p>" + comment + "</p>"; 
    }
    document.getElementById("usercom").innerHTML = allcom; 
}
function changeInput(){
	deleteContent();
	changeColor();
}

function changeColor(){
	form1.className="user";
	form2.className="user";
}

function deleteContent(){
	if(form1.className=="default" || form2.className=="default" ){
		form1.value="";
		form2.value="";
	}
}