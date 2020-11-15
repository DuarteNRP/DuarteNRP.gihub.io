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
function submitAnswer(){
	document.getElementById("demo").innerHTML = "";
	document.getElementById("demo").innerHTML = "O Pedro já não é o favorito";
	return;
	/*let flag=0;
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value;
			if(test!==matrix[i][j]){
				flag+=1;
			}
		}
		document.getElementById("demo").innerHTML = "";
	if (flag)
		document.getElementById("demo").innerHTML = "Resposta errada, "+flag+" letras erradas ou espaços vazios";
	else document.getElementById("demo").innerHTML = "Certo!";*/
}
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
	console.log(array);
	const position=Math.floor(Math.random()*array.length);
	console.log()
	document.getElementById(array[position][0]).value=array[position][1];
}
function solutions(){
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value=matrix[i][j];
		}
}
function reset(){
	for(let i=0;i<15;i++)
		for(let j=0;j<15;j++){
			const string=i+"cell"+j;
			const test=document.getElementById(string).value="";
		}
}