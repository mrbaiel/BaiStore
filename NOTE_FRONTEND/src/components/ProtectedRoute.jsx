import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN } from "../constans";

function ProtectedRoute({children}){
    const [isAuthorized, setIsAuthorized] = useState(null)

    const refreshToken = async () => {

    }

    const auth = async () => {

    }
    if (isAuthorized === null) {
        return <div>Загрузка...</div>
    }
    return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute