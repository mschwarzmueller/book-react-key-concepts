import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.links}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
