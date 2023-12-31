import classes from './MainNavigation.module.css';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
function MainNavigation() {

  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive ? classes.active : ''
              }
            end>
            Home
              </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events`}
              className={({ isActive }) =>
                isActive ? classes.active : ''
              }
            >
            Events
            </NavLink>
          </li>
          {!token && 
            <li>
              <NavLink
                to={`/auth?mode=login`}
                className={({ isActive }) =>
                  isActive ? classes.active : ''
                }
              >
              Login
              </NavLink>
          </li>
          }
          {token &&
          <li>
            <Form action='/logout' method='post'>
              <button>Logout</button>
            </Form>
        </li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
