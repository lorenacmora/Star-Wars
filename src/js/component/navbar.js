import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ImageUrl from "../../img/starwars.png";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  // const [fav, setFav] = useState([]);

  return (
    <nav className="navbar navbar-black bg-black mb-5 ">
      <Link to="/">
      <img src={ImageUrl}/>
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
                      {item.properties.name}

                      <i
                        className="fas fa-trash-alt mx-3"
                        onClick={() => actions.masFav(item._id)}
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