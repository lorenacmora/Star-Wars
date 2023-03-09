import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const { planets } = store;
  const { tipo } = props;

  return (
    <>
      {planets.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              className="card-img-top card-img-top-error"
              alt="..."
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
            <div className="card-body">
              <h5 className="card-title">{`Name: ${item.properties.name}`}</h5>
              <p className="card-text">{`Poblacion: ${item.properties.pobacion}`}</p>
              <p className="card-text">{`Gravity: ${item.properties.gravity}`}</p>
              <p className="card-text">{`Clima: ${item.properties.clima}`}</p>
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
                 
                  onClick={() => {
                    {
                      actions.addCard(item, name);
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