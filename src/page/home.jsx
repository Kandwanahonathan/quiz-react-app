import React from "react";
import Question from "./quizeContainer";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    const handleStart=()=>{
        navigate("/Question")
    }
    return(
        <div className="container-fluid vh-100 justify-content-center align-items-center d-flex
        flex-column bg-light
        ">
            <h1 className="fw-bold text-primary mb-3">Profesional quize license</h1>
            <p className="fs-4 mb-3 text-center">
                Test your knowledge and prepare you for driving exam
            </p>
            <button className="btn btn-success btn-lg px-2 py-3" onClick={handleStart}>
                Get Started 🚗🏍🚲

            </button>
             
        </div>
    )
}
export default Home