import React , {useState , useEffect} from "react";
import ReactDom from "react-dom/client"

function BG(){
   
    const [rang,setcolor] = useState("black");

             useEffect(
                ()=>{document.querySelector('body').style.backgroundColor = rang},[rang])
   
    return(
        <div className="first">

                <h1 className="title">BACKGROUND CHANGER</h1>

               <div className="butt">

                <button className="but red" onClick={()=>{setcolor("red")}}>red</button>
               <button className="but purple"onClick={()=>{setcolor("purple")}}>purple</button>
               <button className="but pink"onClick={()=>{setcolor("pink")}}>pink</button>
               <button className="but yellow"onClick={()=>{setcolor("yellow")}}>yellow</button>
               <button className="but blue"onClick={()=>{setcolor("blue")}}>blue</button>

               </div>
        </div>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<BG></BG>)