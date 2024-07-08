import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLinkClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <section>
                <div id="navigation">
                    <ul>
                        {['home', 'call', 'person', 'camera', 'settings'].map((item, index) => (
                            <li
                                key={index}
                                className={activeIndex === index ? 'active frist' : 'active'}
                                onClick={() => handleLinkClick(index)}
                            >
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name={`${item}-outline`}></ion-icon>
                                    </span>
                                    <span className="text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                </a>
                            </li>
                        ))}
                        <div className="indicator" style={{ transform: `translateX(${activeIndex * 100}px)` }}></div>
                    </ul>
                </div>
                
            </section>
        </div>
    );
};

export default Navbar;
