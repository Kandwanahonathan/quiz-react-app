import { Collapse } from "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useState} from "react";
import ProgressBar from "./progress";
import { useNavigate } from "react-router-dom";
import Home from "./home";
import Lottie from "lottie-react";
import trafficAnimation from "../assets/traffic-animation.json"
function Question() {
    
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); 
  }
    const questions=[
        {
            question:"1. Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
            options:[
                "(a) Umuyobozi",
                "b)	Umuherekeza",
                "c)	A na B ni ibisubizo by’ukuri",
                "d)	Nta gisubizo cy’ukuri kirimo",
                
            ],
            answer:"(a) Umuyobozi",
        },
        {
            question:"2. Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
            options:[
                "a)	Abanyamaguru",
                " b)	Ibinyabiziga bigendera ku biziga bibiri",
                "(c) A na B ni ibisubizo by’ukuri",
                "d) Nta gisubizo cy’ukuri kirimo"
            ],
            answer:"(c) A na B ni ibisubizo by’ukuri",
        },
        {
            question:"3. Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :",
            options:[
                "a)Igisate cy’umuhanda abayobozi bagomba gukurikira",
                " b)	Ahegereye umurongo ukomeje",
                "(c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
                "d) A na C nibyo"
            ],
            answer:"(c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
        },
        {
            question:"4. Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
            options:[
                "a)	Biteganye",
                " b)	Ku murongo umwe",
                "c)	A na B nibyo",
                "(d) Nta gisubizo cy’ukuri kirimo"
            ],
            answer:"(d) Nta gisubizo cy’ukuri kirimo",
        },
            {
                question:"5. Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
                options:[
                    "a)	Ibinyabiziga bigenewe gutwara abagenzi muri rusange",
                    "b)	Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5",
                    "c)	Ibinyabiziga bigenewe kwigisha gutwara",
                    "(d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(d) Nta gisubizo cy’ukuri kirimo",
            },
            {
                question:"6. Ubugari bwa romoruki ikuruwe n’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:",
                options:[
                    "a)	cm75",
                    "b)	cm125",
                    "c)	cm265",
                    "(d)Nta gisubizo cy’ukuri"
                ],
                answer:"(d)Nta gisubizo cy’ukuri",
            },
            {
                question:"7.Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11 :",
                options:[
                    "a)	Ibifite umutambiko umwe uhuza imipira",
                    "b)	Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo",
                    "c)	Makuzungu",
                    "(d)Nta gisubizo cy’ukuri"
                ],
                answer:"(d)Nta gisubizo cy’ukuri",
            },
            {
                question:"8. Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
                options:[
                    "a)	Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini :",
                    "b)	Ahantu hari ibimenyetso bibuza byabugenewe",
                    "c)	Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi",
                    "(d) Ibisubizo byose nibyo"
                ],
                answer:"(d) Ibisubizo byose nibyo",
            },
            {
                question:"9. Kunyuranaho bikorerwa:",
                options:[
                    "a)	Mu ruhande rw’iburyo gusa",
                    "b)	Igihe cyose ni ibumoso",
                    "c)	Iburyo iyo unyura ku nyamaswa",
                    "(d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(d) Nta gisubizo cy’ukuri kirimo",
            },
            {
                question:"10. Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:",
                options:[
                    "a) Burenga toni 1",
                    "b)	Burenga toni 2",
                    "c)	Burenga toni 24",
                    "(d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(d) Nta gisubizo cy’ukuri kirimo",
            },
            {
                question:"11. Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:",
                options:[
                    "(a) Km50",
                    "b)	Km40",
                    "c)	Km30",
                    "d)	Nta gisubizo cy’ukuri"
                ],
                answer:"(a) Km50",
            },
            {
                question:"12. Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:",
                options:[
                    "a)	Umuvuduko w’abanyamaguru",
                    "b)	Ubugari bw’umuhanda",
                    "c)	Umubare w’abanyamaguru",
                    "(d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(d) Nta gisubizo cy’ukuri kirimo",
            },
            {
                question:"13. Ku byerekeye kwerekana ibinyabiziga n’ukumurika kwabyo ndetse no kwerekana ihindura ry’ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:",
                options:[
                    "a) Amatara ndanga",
                    "(b) Amatara ari imbere mu modoka",
                    "c)	Amatara ndangaburambarare",
                    "d)	Ibisubizo byose nibyo"
                ],
                answer:"(b) Amatara ari imbere mu modoka",
            },
            {
                question:"14. Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa w’amapikipiki mu isaha ni:",
                options:[
                    "a) Km25 ",
                    "b)Km70",
                    "c) Km40",
                    "(d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(d) Nta gisubizo cy’ukuri kirimo",
            },
            {
                question:"15. Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:",
                options:[
                    "a) Feri y’urugendo",
                    "b) Feri yo guhagarara umwanya munini",
                    "(c) Feri yo gutabara",
                    "d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(c) Feri yo gutabara",
            },
            {
                question:"16. Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:",
                options:[
                    "a)	2",
                    "b)	3",
                    "(c) 1",
                    "d) Nta gisubizo cy’ukuri kirimo"
                ],
                answer:"(c) 1",
            },

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
                            <p className="text-center fw-bold mb-1" style={{fontWeight:500}}>
                                {currentIndex +1} / {questions.length}
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
            <Lottie animationData={trafficAnimation} loop={true} style={{width:250}}/>
        </div>
    )
}
export default Question
