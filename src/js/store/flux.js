function getState({ getStore, getActions, setStore }) {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api/",

			characters: [],
			planets: [],
		},
		actions: {
			getCharacters: async () => {
				try {
					const store = getStore();
					const response = await fetch(`${store.urlBase}/people`);
					if (!response.ok) {
						return;
					}
					const data = await response.json();
					data.results.map(async (person) => {
						const response = await fetch(person.url);

						const personData = await response.json();
						setStore({
							characters: [...store.characters, personData],
						});
					});
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const store = getStore();
					const response = await fetch(`${store.urlBase}/planets`);
					if (!response.ok) {
						return;
					}
					const data = await response.json();
					data.results.map(async (planet) => {
						const response = await fetch(planet.url);
						const planetData = await response.json();
						setStore({
							planets: [...store.planets, planetData],
						});
						console.log(planetData);
					});
				} catch (error) {
					console.log(error);
				}
			},
		},
	};
}
  
  export default getState;

