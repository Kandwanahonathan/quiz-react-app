import { Collapse } from "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useState} from "react";
import ProgressBar from "./progress";
import { useNavigate } from "react-router-dom";
import Home from "./home";
function Question() {
    
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); 
  }
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
    const handleRetry=()=>{
        setSelected(Array(questions.length).fill(""))
        setStatus(Array(questions.length).fill(""))
        setCurrentIndex(0)
        setScore(0)
    }
    const q=currentIndex< questions.length? questions[currentIndex]:null;

    return(
        <div className="container-fluid d-flex  align-items-center justify-content-center position-relative vh-100">

            
           {q &&(
                
                    <div className="card my-5 shadow-sm w-75">
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={handleBack}> ← Back</button>
                            <p className="text-center fw-bold mb-1">
                                {currentIndex +1 / questions.length}
                            </p>
                            <ProgressBar current={currentIndex +1} total={questions.length}/>
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
                )}
                {
                    currentIndex ===questions.length -1 && selected[currentIndex] !== "" && (
                        <div className="text-center mt-4">
                            <div className="card-shadow p-4 shadow-sm" style={{
                                borderLeft:"6px solid rgb(53, 94, 53)"
                            }}>
                                <h2 className="fw-bold">🎉Quiz Completed!!!!</h2>
                                <h4 className="mt-3 fw-bold">Score:
                                    <span className="text-primary fw-bold">{score}/{questions.length}</span>
                                </h4>
                                <p className="mt-5 fw-bold fs-5">
                                    {score === questions.length ? 
                                 "Perfect! You're ready for the exam! 🚗💨"  :  score >questions.length /2 ?
                                  "Good job! Keep practicing! 👍":"Keep trying, you’ll improve! 💪"
                                }
                                </p>

                                <button className="btn btn-warning px-4 py-4 fs-5"
                                onClick={handleRetry}
                                >
                                     🔄 Retry Quiz
                                </button>

                            </div>
                        </div>
                    )
                }
            
        </div>
    )
}
export default Question
