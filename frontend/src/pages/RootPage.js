import { Outlet, useRouteLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from '../util/auth';

const RootPage = () => {

    const token = useRouteLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if(!token) {
            return;
        }
        if(token === "EXPIRED") {
            submit(null, {action: '/logout', method: 'post'});
            return null;
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'});
        }, tokenDuration);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <Outlet />  
        </>

    );
};

export default RootPage;