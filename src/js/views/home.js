import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { CardCharacters } from "../component/CardCharacters.jsx";
import { CardPlanets } from "../component/CardPlanets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container  ">
          <h1>Characters</h1>
          <div className="home-card-list">
            <CardCharacters nature="people" item="name" />
          </div>
        </div>

        <div className="container">
          <h1>Planets</h1>
          <div className="home-card-list">
            <CardPlanets tipo="planets" item="name" />
          </div>
        </div>

        <div className="container">
          <h1>Vehicles</h1>
          <div className="home-card-list">
            <Vehicles tipo="vehicles" item="name" />
          </div>
        </div>
      </div>
    </>
  );
};