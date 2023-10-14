window.onload = function(){
    const game=document.getElementById("game");
    const status=document.getElementById("status");
    const board=document.getElementById("board");
    const controls=document.getElementsByClassName("controls");
    const button=document.getElementsByClassName("btn")[0];

    const e= board.querySelectorAll('div');
    let play = 'X';
    let poslst=['', '', '', '', '', '', '', '', ''];

    const wincrit= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let z=0; z<=8; z++){
        e[z].setAttribute("class", "square");

    }

    e.forEach( (element, index) => {
        element.addEventListener('click', () => user(element, index));
        element.addEventListener('mouseover', function(){
            element.classList.add('hover');
        });
        element.addEventListener('mouseout', function(){
            element.classList.remove('hover');
        });
    });

    function verifywin(){
        for(let w=0; w<=7; w++){
            const win = wincrit[w];
    
            const pos1= poslst[win[0]];
            const pos2 = poslst[win[1]];
            const pos3 = poslst[win[2]];
            if (pos1 === ''|| pos2 === ''|| pos3===''){
                continue;
            }  
            if (pos1=== pos2 && pos2 === pos3){
                status.innerHTML= 'Congratulations! ' + pos1 +' is the winner';                
                status.classList.add('you-won');
                break;
            }  

        }
    }
        
    const user= (element,index) =>{
        console.log(element.innerText)
        if(element.innerText !== 'X' || element.innerText !== 'O'){
            element.innerText= play;
            element.classList.add(play);
            poslst[index]=play;
            console.log(poslst);
            verifywin();
            if(play === 'X'){
                play='O';
            }
            else
            {
                play='X';
            }
        }

    }

    

    
    
    button.addEventListener('click', ()=>{
        poslst=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        e.forEach(element =>{
            element.innerText ='';
            element.classList.remove('X');
            element.classList.remove('O');
        });
    });

    
}