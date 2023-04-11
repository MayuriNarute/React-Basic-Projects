import './calci.css'
import { useState } from 'react';


function Calci() {
    const[res,setResult]=useState("");

    const clickhandle=(event)=>{

        setResult(res.concat(event.target.value));
        
    }
    const clearResult=()=>{
        setResult("");
    }
    const calculteResult=()=>{
        try {
            // if(res.length>=4){
            //     var res2=Math.round(parseInt(res));
            //     setResult(res2.toFixed(2));
    
            // }
            
            // else{
                setResult(eval(res).toString());
                   }
        catch(err){
            setResult("Error");
        }
       
            
    }
    return (
      <>
        <div class="container">
            <div class="calc-body">
                <div class="calc-screen">
                <div class="calc-typed">{res}</div>

                </div>
                <div class="calc-button-row">
                <button type='button' class="button c" onClick={clearResult} value="C">C</button>
                <button type='button' class="button l" onClick={clickhandle} value="*(">(</button>

                <button type='button' class="button l" onClick={clickhandle} value=")">)</button>
                <button type='button' class="button l" onClick={clickhandle} value="/">/</button>
                </div>
                <div class="calc-button-row">
                <input type='button' class="button" onClick={clickhandle} value="7"/>
                <input type='button' class="button" onClick={clickhandle} value="8"/>
                <input type='button' class="button" onClick={clickhandle} value="9"/>
                <input type='button' class="button l" onClick={clickhandle} value="*"/>
                </div>
                <div class="calc-button-row">
                <input type='button' class="button" onClick={clickhandle} value="4"/>
                <input type='button' class="button" onClick={clickhandle} value="5"/>
                <input type='button' class="button" onClick={clickhandle} value="6"/>
                <button type='button l' class="button l" onClick={clickhandle} value="-">-</button>
                </div>
                <div class="calc-button-row">
                <input type='button' class="button" onClick={clickhandle} value="1"/>
                <input type='button' class="button" onClick={clickhandle} value="2"/>
                <input type='button' class="button" onClick={clickhandle} value="3"/>
                <button type='button l' class="button l" onClick={clickhandle} value="+">+</button>
                </div>
                <div class="calc-button-row">
                <input type='button' class="button" onClick={clickhandle} value="."/>
                <input type='button' class="button" onClick={clickhandle} value="0"/>
                <button type='button' class="button l" onClick={clickhandle} value="%">%</button>
                <button type='button' class="button l x" onClick={calculteResult} value="=">=</button>
                </div>
                </div>
                <br></br>
                <br></br>
                <h5 class="about"><center>Made with❤️<br></br> By Mayuri Narute</center></h5>
        </div>
                
    </>
    );
  }

  
  export default Calci;
