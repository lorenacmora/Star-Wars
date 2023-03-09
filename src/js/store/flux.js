import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://swapi.tech/api/",
			people: [],
			planets: [],
			favorites: [],
			vehicles: [],
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

			getStarWarsVehicles: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/vehicles`);
					let data = await response.json();
					data.results.forEach(async (element) => {
						try {
							let response = await fetch(element.url);
							let data2 = await response.json();

							setStore({
								...getStore(),
								vehicles: [...getStore().vehicles, data2.result],
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

			masFav: (id) => {
				let masFav = getStore().favorites.filter((item) => item._id != id);
				setStore({ favorites: masFav });
			},
		},
	};
};

export default getState;