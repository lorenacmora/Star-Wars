import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { CharactersCard } from "../component/CardCharacters.jsx";
import { PlanetCard } from "../component/CardPlanets.jsx";
import { Vehicle } from "../component/vehicle.jsx";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container  ">
          <h1>Characters</h1>
          <div className="home-card-list">
            <CharactersCard tipo="people" item="nombre" />
          </div>
        </div>

        <div className="container">
          <h1>Planets</h1>
          <div className="home-card-list">
            <PlanetCard tipo="planets" item="nombre" />
          </div>
        </div>

        <div className="container">
          <h1>Vehicle</h1>
          <div className="home-card-list">
            <Vehicle tipo="vehicle" item="nombre" />
          </div>
        </div>
      </div>
    </>
  );
};