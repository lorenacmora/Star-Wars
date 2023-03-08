import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const CharactersCard = (props) => {
  const { tipo, nombre } = props;
  const { store, actions } = useContext(Context);
  const { people } = store;
  const [active, setActive] = useState(false);

  return (
    <>
      {people.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{`Nombre: ${item.properties.name}`}</h5>
              <p className="card-text">{`Gender: ${item.properties.gender}`}</p>
              <p className="card-text">{`Hair color: ${item.properties.hair_color}`}</p>
              <p className="card-text">{`Eye color: ${item.properties.eye_color}`}</p>
              <div className="div">
                <Link to={`/${tipo}/${item._id}`} className="btn btn-primary">
                  Learn more!
                </Link>
                <button
                  type="button"
                  className={`btn ${
                    store.favorites.includes(item)
                      ? "btn-warning"
                      : "btn-outline-warning"
                  } 
                  `}
                  // data-bs-toggle="button"
                  onClick={() => {
                    {
                      actions.addCard(item, nombre);
                    }
                  }}
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};