function tictok(){
	}

//your JS code here. If required.
let mybtn=document.getElementById("submit");
mybtn.addEventListener("click",(e)=>{
console.log("clicked");
}
tictok();

let box=document.querySelectorAll(".box");
let turn0=true;//playerX player0
//2d array and array indexing because accessing the elements
const winPatterns=[//winpatterns is a array
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
];
boxes.forEach(box)=>{
	box.addEventListener("click",()=>{
		console.log("box was clicked");
		if(turn0){//player0 turns
			box.innerText="0";
			turn0=false;
		}else{//playerx turns
		box.innerText="X";
		turn0=true;
		}
		box.disable=true;
		checkWinner();
	});
});
const checkWinner = ()=>{//checkwinner ke pass calll jaayega
	for(pattern of winPatterns){
		console.log(pattern);
	}//pattterns bhi all print honge
	console.log(
     boxes[pattern[0]].innerText,//calcuate boxes 0,1,2 pr kya values h
		boxes[pattern[1]].innerText,
		boxes[pattern[2]].innerText,
);
	let pos1Val=boxes[pattern[0]].innerText;
		let pos2Val=boxes[pattern[1]].innerText;
	let pos3Val=boxes[pattern[2]].innerText;

	if(pos1Val!="" && pos2Val!=="" && pos3Val!=""){
		if(pos1Val === pos2Val && pos2Val === pos3Val){
			console.log("Winner");
		}
	}
}
};
