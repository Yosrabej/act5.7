function add(){
   
var list = document.createElement("li");
  var text = document.createTextNode(input.value);
  list.appendChild(text);
  document.getElementById("liste").appendChild(list);
  document.getElementById("input").value='';
}

