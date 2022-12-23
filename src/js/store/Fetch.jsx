import React from "react";

const urlBase = "https://www.swapi.tech/api/"

export const Fetch = async () => {
    const response = await fetch(urlBase)
    console.log(response)
};

export default Fetch;