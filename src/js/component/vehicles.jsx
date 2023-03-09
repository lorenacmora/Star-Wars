import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const { vehicles } = store;
  const { tipo, name } = props;

  return (
    <>
      {vehicles.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{`Name: ${item.properties.name}`}</h5>
              <p className="card-text">{`Model: ${item.properties.model}`}</p>
              <p className="card-text">{`Capacity: ${item.properties.cargo_capacity}`}</p>
              <p className="card-text">{`Description: ${item.description}`}</p>
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
                      actions.addCard(item, name);
                    }
                  }}
                >
                  {store.vehicles.includes(item._id) ? (
                    <i className="far fa-heart"></i>
                  ) : (
                    <i className="fas fa-heart"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};