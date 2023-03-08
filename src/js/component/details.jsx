import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharactersDetails = (item) => {
  const { store, actions } = useContext(Context);
  const { planets, people } = store;
  const params = useParams();

  const [description, setDescription] = useState([]);

  const getCharactersDetails = () => {
    const ObtenerDetalles = store[params.details].find(
      (element) => element._id === params.theId
    );
    setDescription(ObtenerDetalles);
  };

  useEffect(() => {
    getCharactersDetails();
  }, [people]);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="row">
            {description?.properties?.vehicle_class ? (
              <>
                <div className="col-sm-6">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${description?.uid}.jpg`}
                    className="card-img-top img-detail"
                    alt="..."
                  />
                </div>
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">{`Nombre: ${description?.properties?.nombre}`}</h5>
                    <p className="card-text">
                      <strong>
                        {`Manufacturer: ${description?.properties?.manufacturer}`}
                      </strong>
                    </p>
                    <p className="card-text">
                      <strong>
                        {`Price: ${description?.properties?.cost_in_credits}`}
                      </strong>
                    </p>
                    <p className="card-text">
                      <strong>
                        {`Max Speed (km): ${description?.properties?.max_atmosphering_speed}`}
                      </strong>
                    </p>
                  </div>
                </div>
              </>
            ) : null}
            {description?.properties?.birth_year ? (
              <>
                <div className="col-sm-6">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${description?.uid}.jpg`}
                    className="card-img-top img-detail"
                    alt="..."
                  />
                </div>
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">{`Name: ${description?.properties?.name}`}</h5>
                    <p className="card-text">
                      <strong>{`Height: ${description?.properties?.height}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Weight: ${description?.properties?.mass}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Birthday: ${description?.properties?.birth_year}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Description: ${description?.description}`}</strong>
                    </p>
                  </div>
                </div>
              </>
            ) : null}
            {description?.properties?.diametro ? (
              <>
                <div className="col-sm-6">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${description?.uid}.jpg`}
                    className="card-img-top img-detail"
                    alt="..."
                    onError={(e) =>
                      (e.target.src =
                        "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                    }
                  />
                </div>
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">{`Nombre: ${description?.properties?.nombre}`}</h5>
                    <p className="card-text">
                      <strong>{`Poblacion: ${description?.properties?.poblacion}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Rotation period: ${description?.properties?.rotation_period}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Terrain: ${description?.properties?.terrain}`}</strong>
                    </p>
                    <p className="card-text">
                      <strong>{`Description: ${description?.description}`}</strong>
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharactersDetails;