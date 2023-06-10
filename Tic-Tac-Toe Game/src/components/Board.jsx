import React,{useState} from 'react';
import Square from './Sqaure';
import '../App'
import Modal from './ResultModal';
const Board=()=>{
    const [show, setShow] = useState(false);
    
    
    const showModal = () => {
        setShow(true);
    };
    const hideModal = () => {
        setShow(false);
    };
    const [state,setState]=useState(Array(9).fill(null));
    const [isXTurn,setisXTurn]=useState(true);
    let isTie=true;
    const checkWinner=()=>{
        const winnerlogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerlogic){
            const [a,b,c]=logic;
            if(state[a] !== null && state[a]=== state[b] && state[a]===state[c] ){
                return state[a];
            }
            
            
        }
        return false;
    };
    const isWinner=checkWinner();
    
    const handleReset=()=>{
        setState(Array(9).fill(null));
    }
    const handleClick=(index)=>{
        if(state[index] !== null){
            return;
        }
        const copyState=[...state];

        copyState[index]= isXTurn ?"X":"O";
        setState(copyState);
        setisXTurn(!isXTurn);

    }
    return(

        <>
        <div className='board-container text-center'>

           
            
            
            {isWinner ? (
               <>
                 <Modal isWinner={isWinner} show={showModal} hideModal={hideModal} handleReset={handleReset}>Game Result</Modal>
                 <h4>Player {isXTurn ? "X" : "O"} Please Move!</h4>
                 <div className='container align-items-center'>
                <div className="row" id="labels ">
                    <Square onClick={()=>handleClick(0)} value={state[0]}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]}/>
                    <Square onClick={()=>handleClick(2)} value={state[2]}/>
                   
                </div>
                <div className='row' id="labels ">             
                    <Square onClick={()=>handleClick(3)} value={state[3]}/>                   
                    <Square onClick={()=>handleClick(4)} value={state[4]}/>                   
                    <Square onClick={()=>handleClick(5)} value={state[5]}/>                   
                </div>
                <div className='row' id="labels ">
                    <Square onClick={()=>handleClick(6)} value={state[6]}/>
                    <Square onClick={()=>handleClick(7)} value={state[7]}/>                   
                    <Square onClick={()=>handleClick(8)} value={state[8]}/>     
                </div>
                <button id="btnid" type="button" class="btn btn-dark">Player X </button>
                <button id="btnid2" type="button" class="btn btn-dark disabled">Player O </button>
            </div>
                
            <div className='row'>
                <figure class="my-5 text-center">
                <div class="my-5">
                    <blockquote class="blockquote">
                        <p>“Happiness is...winning at tic-tac-toe”
                        </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        <cite title="Source Title">Anonymous</cite>
                    </figcaption>
                </div>
                </figure>
            </div>
           
     
               </>
              
            ):(
                
            <>
             
            <h4>Player {isXTurn ? "X" : "O"} Please Move!</h4>
            <div className='container align-items-center'>
                <div className="row">
                    <Square onClick={()=>handleClick(0)} value={state[0]}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]}/>
                    <Square onClick={()=>handleClick(2)} value={state[2]}/>
                   
                </div>
                <div className='row'>             
                    <Square onClick={()=>handleClick(3)} value={state[3]}/>                   
                    <Square onClick={()=>handleClick(4)} value={state[4]}/>                   
                    <Square onClick={()=>handleClick(5)} value={state[5]}/>                   
                </div>
                <div className='row'>
                    <Square onClick={()=>handleClick(6)} value={state[6]}/>
                    <Square onClick={()=>handleClick(7)} value={state[7]}/>                   
                    <Square onClick={()=>handleClick(8)} value={state[8]}/>     
                </div>
                {isXTurn ?(
                <>
                 <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                <button id="btnid" type="button" class="btn btn-dark">Player X </button>
                <button id="btnid2" type="button" class="btn btn-dark disabled">Player O </button>

                </>
                ):(
                    <>
                    <button id="btnid" type="button" class="btn btn-dark disabled">Player X </button>
                    <button id="btnid2" type="button" class="btn btn-dark">Player O </button>
                    <i class="fa fa-hand-o-left" aria-hidden="true"></i>

                    </>
                )
                }
            </div>
                
            <div className='row'>
                <figure class="text-center">
                <div class="my-5">
                    <blockquote class="blockquote">
                        <p>“Happiness is...winning at tic-tac-toe”
                        </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        <cite title="Source Title">Anonymous</cite>
                    </figcaption>
                </div>
                </figure>
            </div>
            </>)}

        </div>
        <footer class="text-center text-lg-start text-white mt-10">
            <section class="d-flex justify-content-between p-4" >
            <div class="me-5">
              <span>Get connected with me on social networks:</span>
            </div>
            <div>
                <a href="https://mayuriweb.netlify.app/" class="text-white me-4">
                  <i class="fa fa-google  "></i>
                </a>
                <a href="https://www.youtube.com/channel/UCqzo9230kipqRye4DfdabZg" class="text-white me-4">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/mayuri-narute-556995216/" class="text-white me-4">
                  <i class="fa fa-linkedin"></i>
                </a> 
                <a href="https://github.com/MayuriNarute" class="text-white me-4">
                  <i class="fa fa-github"></i>
                </a>
            </div>
      </section>
      
    </footer>
     
            
            </>
            
    );
};

export default Board;