import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://swapi.tech/api/",
			people: [],
			planets: [],
			favorites: [],
			vehicle: [],
		},
		actions: {
			getStarWarsCharacters: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/people/`);
					let data = await response.json();
					data.results.forEach(async (element) => {
						try {
							let response2 = await fetch(element.url);
							let data2 = await response2.json();

							setStore({
								...getStore(),
								people: [...getStore().people, data2.result],
							});
						} catch (error) {
							console.log(error);
						}
					});
				} catch (error) {
					console.log(`${error}error`);
				}
			},
			getStarWarsPlanets: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/planets/`);
					let data = await response.json();

					data.results.forEach(async (element) => {
						try {
							let response = await fetch(element.url);
							let data2 = await response.json();

							setStore({
								...getStore(),
								planets: [...getStore().planets, data2.result],
							});
						} catch (error) {
							`${error}error`;
						}
					});
				} catch (error) {
					console.log(`${error}error`);
				}
			},

			getStarWarsVehicle: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/vehicle`);
					let data = await response.json();
					data.results.forEach(async (element) => {
						try {
							let response = await fetch(element.url);
							let data2 = await response.json();

							setStore({
								...getStore(),
								vehicle: [...getStore().vehicle, data2.result],
							});
						} catch {
							`${error} error`;
						}
					});
				} catch (error) {
					console.log(`${error}error`);
				}
			},

			addCard: (favorites) => {
				let fav = getStore().favorites.some(
					(item) => item._id == favorites._id
				);
				if (!fav) {
					setStore({
						favorites: [...getStore().favorites, favorites],
					});
				}
			},

			delFavorito: (id) => {
				let delFavorito = getStore().favorites.filter((item) => item._id != id);
				setStore({ favorites: delFavorito });
			},
		},
	};
};

export default getState;