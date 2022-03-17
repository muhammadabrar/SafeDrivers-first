import {ArrowRight16, Menu32, Close32, ArrowDown16} from '@carbon/icons-react';
import {useState, useEffect} from 'react';
export default function Nav() {
    const [y, setY] = useState(0);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          console.log("scrolling up");
        } else if (y < window.scrollY) {
          console.log("scrolling down");
        }
        setY(window.scrollY);
      };
    
    useEffect(() => {
        setY(window.scrollY);
      }, []);
      
      useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
      
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
      }, [y]);
  return (
    <>
      <header className={y >= 200 ? "header fill": "header"} >

        <nav className="nav">
          <h2 className="logo"><span>Smart</span>SafeDrivers</h2>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <i className="fas fa-ellipsis-h"><Menu32 /></i>
          </label>

          <ul className="menu">
            <div className="menu-item active">
              <a href="#">Home  </a><i><ArrowDown16 /></i>
            </div>
            <div className="menu-item">
              <a href="#">Services  </a> <i><ArrowRight16 /></i>
            </div>
            <div className="menu-item">
              <a href="#">Pricing</a><i><ArrowRight16 /></i>
            </div>
            <div className="menu-item">
              <a href="#">Contact Us</a><i><ArrowRight16 /></i>
            </div>
            <label for="chk" className="hide-menu-btn">
              
              <i className="fas fa-times"><Close32 /></i>
            </label>
            
          </ul>
         
        </nav>
      </header>
      
    </>
  );
}
