import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">HN</p>
          </NavLink>
          <nav className="flex text-lg font-medium gap-7">
              <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
              About
              </NavLink>
              <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
              Projects 
              </NavLink>
          </nav>
    </header>
  );
};
export default Navber;
