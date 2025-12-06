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
        <div 
        
        className="container-fluid vh-100 justify-content-center align-items-center d-flex
        flex-column bg-light
        " >
            <h1 className="fw-bold text-primary mb-3">Purovizwari</h1>
            <p className="fs-4 mb-3 text-center text-light fw-bold">
                Ushaka kwitoza kujya gukorera provizwari waza uki toza hanyuma ukayibona
            </p>
            <button className="btn btn-success text-light btn-lg px-2 py-3 fw-bold" onClick={handleStart}>
                Watangira isuzuma 🚗🏍🚲

            </button>
             
        </div>
    )
}
export default Home