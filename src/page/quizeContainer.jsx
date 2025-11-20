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
    const [selected,setSelected]=useState("")
    const [status,setStatus] =useState("")
    const handleClick=(opt, correctAnswer)=>{
        setSelected(opt)
        if (opt === correctAnswer) {
            setStatus("correct");

        }
        else{
            setStatus("wrong");
        }
    }

    return(
        <div className="container-fluid">
            {
                questions.map((q,index)=>(
                    <div className="card" key={index}>
                        <div className="card-body">
                        <h3 className="card-title" >{q.question}</h3>
                        {
                            q.options.map((opt,i)=>(
                                <button className="btn btn-light px-3 m-3"
                                key={i}
                                onClick={()=>handleClick (opt,q.answer)}
                                >
                                    {opt}
                                </button>
                            ))
                            
                        }
                        {
                            selected && (
                                <p className="mt-2 fw-bold text-success">
                                    {status === "correct"? "✔ correct" :"✘ wrong"}
                                </p>
                            )
                            
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Question
