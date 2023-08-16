import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
            Home
              </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
            Events
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
