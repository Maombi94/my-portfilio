import React from 'react';
import './Header.css';
import amos from "../../assets/amos.jpeg";


const Header = () => {
    return (
      <div className="gpt3__header section__padding">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            I`m Amos A, Maombi. A software developer
          </h1>
          <p>
            I have innovative tech mind with experience of working as a computer
            programmer. Capable of working with different variety of technology,
            software solutions, and managing databases. I am Valuable team
            member who has experience diagnosing problems and developing
            solutions. I have extensive expertise in networking systems, which
            makes me a talented person with unique ideas and a history of
            successful contributions in the field.
          </p>

          <div className="gpt3__header-content__input">
            <button type="button">Check my CV</button>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={amos} alt="amos" />
        </div>
      </div>
    );
}

export default Header
