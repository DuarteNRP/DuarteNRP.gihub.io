const matrix = [
	["c","e","s","a","r","","b","a","l","t","a","z","a","r",""],
	["l","","o","","","i","","n","","","","","","","t"],
	["a","","f","","","n","","d","","","m","e","r","c","e"],
	["u","","i","","p","e","d","r","o","","","","","","r"],
	["d","","a","","","s","","e","","","a","","i","","e"],
	["i","","","","j","","","","","","l","","r","","s"],
	["o","","f","r","e","d","","l","","","e","l","i","s","a"],
	["","","","","s","","r","u","i","","x","","n","",""],
	["g","a","b","y","","j","","i","","x","i","c","a","","a"],
	["a","","","","","o","","s","","","a","","","","l"],
	["b","r","a","n","d","a","o","","","","","l","","z","e"],
	["r","","","","","n","","t","e","n","d","a","","","x"],
	["i","","k","i","k","a","","i","","","","u","","","a"],
	["e","","","","","","","t","","v","","r","","",""],
	["l","","c","a","s","t","r","o","","n","","a","n","g","i"]
];
function tips(){
	let array=[];
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value;
			if(matrix[i][j]!=="" && test!==matrix[i][j]){
				array.push([string,matrix[i][j]]);
			}
		}
	if(array.length===0) return;
	if(array.length===1){
		var btnSubmit = document.getElementById("submit");
		btnSubmit.disabled = false;
	}
	const position=Math.floor(Math.random()*array.length);
	document.getElementById(array[position][0]).value=array[position][1];
}
function solutions(){
	var btnSubmit = document.getElementById("submit");
	btnSubmit.disabled = false;
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value=matrix[i][j];
		}
}
function reset(){
	var btnSubmit = document.getElementById("submit");
	btnSubmit.disabled = true;
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value="";
		}
}
function rulesButton(){
  const rules = document.getElementById("rules");
  const span = document.getElementsByClassName("close")[0];
  rules.style.display = "block";
  span.onclick = function() {
    rules.style.display = "none";
  }

}
function submitAnswer(){
	let flag = 0;
	for(let i = 0; i<15; i++)
		for(let j=0; j<15; j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value;
			if(test!==matrix[i][j]){
				flag+=1;
			}
		}

	if (flag){
		window.alert("Tens "+flag+" letra(s) errada(s)! Podes pedir uma letra para te ajudar.");
		return;
	}
	const submit  = document.getElementById("final-screen");
	const span = document.getElementsByClassName("close")[1];
	submit.style.display = "block";
	span.onclick = function() {
   submit.style.display = "none";
	}
}
function myFunction(){
	var btnSubmit = document.getElementById("submit");
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value;
			if(matrix[i][j]!=="" && test===""){
				btnSubmit.disabled = true;
				return;
			}
		}
	btnSubmit.disabled = false;
}
