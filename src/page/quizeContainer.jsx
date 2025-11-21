import { Collapse } from "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useState} from "react";
function Question() {
    const questions=[
        {
            question:"what is the main puporse of road signs",
            options:[
                "to decorate the road",
                "to give the instruction to driver",
                "slow traffic",
            ],
            answer:"to give the instruction to driver",
        },
        {
            question:"when approaching the zebra crossing ,you should",
            options:[
                "speed up",
                "stop and allow pedestrians to cross",
                "ignore pedestrians"
            ],
            answer:"stop and allow pedestrians to cross",
        }
    ];
    const [selected,setSelected]=useState(Array(questions.length).fill(""))
    const [status,setStatus] =useState(Array(questions.length).fill(""))
    const [currentIndex,setCurrentIndex]=useState(0);
    const [score,setScore]=useState(0);
    const handleClick=(questionIndex,opt, correctAnswer)=>{
        const newSelected=[...selected]
        const newStatus=[...status]
        newSelected[questionIndex]=opt
        const isCorrect=opt ===correctAnswer
        newStatus[questionIndex]= isCorrect?"correct":"wrong";
        setSelected(newSelected);
        setStatus(newStatus);
        if (isCorrect) {
            setScore((prev)=>prev +1)
        }
    }
    const q=currentIndex< questions.length? questions[currentIndex]:null;

    return(
        <div className="container-fluid d-flex  align-items-center justify-content-center position-relative vh-100">
            
                
                    <div className="card my-5 shadow-sm w-75">
                        <div className="card-body">
                        <h3 className="card-title text-center  text-primary ">{q.question}</h3>
                        <div className="d-flex flex-column col-md-12">
                        {
                            q.options.map((opt,idx)=>(
                                <button key={idx}
                                className={`btn  px-3 m-3  
                                    ${selected[currentIndex]==opt?
                                    (status[currentIndex] === "correct"? "btn-success":"btn-danger"):"btn-secondary"
                                }`}
                                disabled={selected[currentIndex] !==""}
                                onClick={()=>handleClick(currentIndex,opt,q.answer)}
                                style={{fontFamily:"-apple-system",fontSize:"25px"}}
                                >
                                    {opt}
                                </button>
                            ))
                        }
                        </div>
                     
                        {
                            selected[currentIndex] && (
                                <p className={`mt-3 fw-bold ${status[currentIndex]==="correct"?"text-success":"text-danger"}`}>
                                   {status[currentIndex] === "correct"? "✔ success" :"✘ wrong"}
                                </p>
                            )
                            
                        }
                        <div className="mt-4 d-flex justify-content-start gap-3" >
                            <button className="btn btn-secondary " 
                            disabled={currentIndex ===0}
                            onClick={()=> setCurrentIndex(currentIndex -1)}
                            >
                                previous
                            </button>
                            <button className="btn btn-primary" 
                            disabled={currentIndex=== questions.length -1 || selected[currentIndex] === ""}
                            onClick={()=>setCurrentIndex(currentIndex +1)}
                            >Next</button>
                        </div>
                        </div>
                    </div>
                <div className="mt-4">
                    {currentIndex ===questions.length ?(
                        <div className="mt-4">
                            <h2>Final Score</h2>
                            <h4>Your Final Score :{score}/{questions.length}</h4>
                        </div>
                    ):<></>}
                </div>
            
        </div>
    )
}
export default Question
