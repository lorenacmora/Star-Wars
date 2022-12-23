import React from "react";
import { Link } from "react-router-dom";
// import { Favorites } from "./Favorites";

/* Falta arreglar el compoennte Favorites para agregar cada item a los favoritos del dropdown*/

export const Navbar = () => {
	return (
		<div className="container-flex">
			<nav className="navbar navbar-black bg-black mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" width="100" height="80" />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-secondary">0</span>
						</button>
						<ul className="dropdown-menu">
							<li>some item here</li>
						</ul>
					</div>
					</Link>
				</div>
			</nav>
		</div>
	);
};

