import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 ">
      <Link to="/">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allocine.fr%2Farticle%2Ffichearticle_gen_carticle%3D18637936.html&psig=AOvVaw1D1G3PssCBAtZknytpc43m&ust=1678396907220000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPijp-yhzf0CFQAAAAAdAAAAABAb" height={50} width={60}
          " />
      </Link>
      <div className="ml-auto ">
        <div className="dropdown ">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length ? (
              store.favorites.map((item) => {
                return (
                  <li key={item._id}>
                    <a className="dropdown-item" href="#">
                      {item.properties.nombre}

                      <i
                        className="fas fa-trash-alt mx-3"
                        onClick={() => actions.delFavorito(item._id)}
                      ></i>
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="dropdown-item text-center">"Empty"</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};