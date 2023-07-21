import { Navigate } from "react-router-dom";
import { AuthorContext } from "../context";
import { useContext } from "react";


//Перелінковка на сторінку з попилкою, при невірному введені шляху 
const NotFound = () => {
    const { isAuthor, setIsAuthor } = useContext(AuthorContext)



    return (
        <>
            {/* {isAuthor
            ? <Navigate to="/error" replace />

            : <Navigate to="/login" replace />

        } */}
        </>
    )
}
export default NotFound;