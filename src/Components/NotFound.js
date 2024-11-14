import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])

    return (
        <div className="vh-100 text-center pt-5">
            <h1>
                Upsss 
                <br/>
                404
                <br/>
                The page wasn't found
            </h1>
        </div>
    );
}