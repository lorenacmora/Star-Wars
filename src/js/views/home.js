import React from "react";
import CardCharacters from "../component/CardCharacters.jsx";
import CardPlanets from "../component/CardPlanets.jsx";
import "../../styles/home.css";
import Flux from "../store/flux.js"

export const Home = () => (
	<div className="bg-red font-weight-bold mt-5">
		<h1>Characters</h1>
	<CardCharacters />
	
		<h1>Planets</h1>
		<CardPlanets />
	</div>
);
