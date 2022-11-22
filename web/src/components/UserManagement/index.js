import { useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

export async function ActiveAccount() {
    const params = useParams();
    const navigate = useNavigate();
    const body = {
        email: params.code
    }
    await fetch('http://localhost:8679/register/active-account', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    useEffect(() => {
        return navigate('/login')
    })

    // return (<Navigate to="/login" />)
}

