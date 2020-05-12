
//create close button on every created line
var mylist = document.getElementsByTagName('li');
var i;
for (i = 0; i < mylist.length; i++) {
    var div = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mylist[i].appendChild(span);
  }


//close button onclick to hide item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/*
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

//trigger enter button
$('#myinput').keypress(function (e){
    if(e.which == 13) {
        $('#btn').trigger('click');
    }
});

*/

//function to add new element

function newElement(){
    var li = document.createElement("li");
    li.className = "list-group-item list-group-item-warning"; //to boostrap4 for list display
    var inputvalue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputvalue);
    //to display the input value as li. 
    li.appendChild(t);

   
    if (inputvalue === ''){
        alert ('filled in the blank pls');
    }
    else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myinput').value = ""; //to set up the input as blank after enter value

   //create X button and function of X button 
   var span = document.createElement('span');
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);

   for (i=0; i < close.length; i++){
       close[i].onclick = function(){
           var div = this.parentElement;
           div.style.display = "none";
       }
   }

}

console.log(newElement)