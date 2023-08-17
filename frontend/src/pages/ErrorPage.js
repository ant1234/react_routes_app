import PageContent from './PageContent';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    let message = "Something went wrong.";
    const error = useRouteError();
    
console.log(error);
    if(error.status === 500) {
        message = error.data.message;
    }

    return <PageContent title="Error content">
        <p>{message}</p>
    </PageContent>
};

export default ErrorPage;