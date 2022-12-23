import React from "react";
import reactDom from "react-dom";

export const CardCharacters =  () => {


  
return (
    <div className="card-group">
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt=" "/>
    <div className="card-body">
      <h5 className="card-title">Luke Skywalker</h5>
      <p className="card-text">Birth Year: 19BBY
Species: Unknown
Height: 172cm
Mass: 77kg
Gender: Male
Hair Color: Blond
Skin Color: Fair
Homeworld: Tatooine</p>
      <button type="button" className="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" alt =""/>
    <div className="card-body">
      <h5 className="card-title">C-3PO</h5>
      <p className="card-text">Birth Year: 112BBY
Species: Droid
Height: 167cm
Mass: 75kg
Gender: n/a
Hair Color: n/a
Skin Color: Gold
Homeworld: Tatooine
        </p>
      <button type="button" className="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Darth Vader</h5>
      <p className="card-text">Birth Year: 41.9BBY
Species: Unknown
Height: 202cm
Mass: 136kg
Gender: Male
Hair Color: None
Skin Color: White
Homeworld: Tatooine</p>
      <button type="button" className="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
</div>
     
);
};
export default CardCharacters;