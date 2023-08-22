import { redirect } from "react-router-dom";

export function action({request}) {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}