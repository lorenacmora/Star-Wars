import React from "react";


export const CardPlanets =  () => {


  
return (
    <div className="card-group">
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg"alt=" "/>
    <div className="card-body">
      <h5 className="card-title">Alderaan</h5>
      <p className="card-text">Population: 2,000,000,000
Rotation Period: 24 days
Orbital Period: 364 days
Diameter: 12,500km
Gravity: 1 Standard
Terrain: Grasslands, Mountains
Surface Water: 40%
Climate: Temperate</p>
      <button type="button" class="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/planets/3.jpg" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Yavin IV</h5>
      <p className="card-text">Population: 1,000
Rotation Period: 24 days
Orbital Period: 4,818 days
Diameter: 10,200km
Gravity: 1 Standard
Terrain: Jungle, Rainforests
Surface Water: 8%
Climate: Temperate, Tropical</p>
      <button type="button" class="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
  <div className="card">
    <img src="https://starwars-visualguide.com/assets/img/planets/4.jpg" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Hoth</h5>
      <p className="card-text">Population: Unknown
Rotation Period: 23 days
Orbital Period: 549 days
Diameter: 7,200km
Gravity: 1.1 Standard
Terrain: Tundra, Ice Caves, Mountain Ranges
Surface Water: 100%
Climate: Frozen</p>
      <button type="button" class="btn btn-outline-info">Learn More</button>
      <button className="btn btn-link-warning">💛</button>
    </div>
  </div>
</div>
     
);
};
export default CardPlanets;