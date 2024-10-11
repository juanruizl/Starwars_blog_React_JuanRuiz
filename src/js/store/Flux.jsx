const getState = ({ getStore, setStore }) => {
    return {
        store: {
            starships: [],
            people: [],
            planets: [],
            favorites: [],
            API_URL: "https://www.swapi.tech/api",
        },

        actions: {
            getPeople: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.API_URL}/people`);
                    if (response.ok) {
                        const data = await response.json();
                        const peopleDetails = await Promise.all(
                            data.results.map(async (element) => {
                                const res = await fetch(`${store.API_URL}/people/${element.uid}`);
                                const dataItem = await res.json();
                                return dataItem.result;
                            })
                        );
                        setStore({ people: peopleDetails });
                    } else {
                        console.error("Error fetching people");
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            getPlanets: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.API_URL}/planets`);
                    if (response.ok) {
                        const data = await response.json();
                        const planetsDetails = await Promise.all(
                            data.results.map(async (element) => {
                                const res = await fetch(`${store.API_URL}/planets/${element.uid}`);
                                const dataItem = await res.json();
                                return dataItem.result;
                            })
                        );
                        setStore({ planets: planetsDetails });
                    } else {
                        console.error("Error fetching planets");
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            getStarships: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.API_URL}/starships`);
                    if (response.ok) {
                        const data = await response.json();
                        const starshipsDetails = await Promise.all(
                            data.results.map(async (element) => {
                                const res = await fetch(`${store.API_URL}/starships/${element.uid}`);
                                const dataItem = await res.json();
                                return dataItem.result;
                            })
                        );
                        setStore({ starships: starshipsDetails });
                    } else {
                        console.error("Error fetching starships");
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            toggleFavorite: (item, type) => {
                const store = getStore();
                const favoriteExists = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

                if (favoriteExists) {
                    setStore({
                        favorites: store.favorites.filter(fav => !(fav.uid === item.uid && fav.type === type))
                    });
                } else {
                    setStore({
                        favorites: [...store.favorites, { ...item, type }]
                    });
                }
            },

            removeFavorite: (index) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((_, i) => i !== index)
                });
            }
        }
    };
};

export default getState;
