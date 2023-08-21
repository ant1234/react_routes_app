import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if(mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Unknown link provided'}, {status: 422});
  }

  const data = await request.formData();
  const authData = {
    password: data.get('password'),
    email: data.get('email'),
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    throw json({message: "Could not authenticate user"}, {status: 500});
  }

  // soon authenticate user with token

  return redirect('/');

}