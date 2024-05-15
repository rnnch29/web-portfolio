import pokemon from '../assets/project/poke-api.png'
import rtkStore from '../assets/project/rtk-store.png'
import nextmovie from '../assets/project/nextmovie.png'

export const projects = [
    {
        name: 'Poke-API',
        describe: 'This project was created to access Pokémon data from an API, allowing users to view details for each Pokémon.',
        img: pokemon,
        link: 'https://poke-api-nine-iota.vercel.app/'
    },
    {
        name: 'RTK-Store',
        describe: 'RTK-Store project was created to implement the Fake Store API with Redux Toolkit to help with state management.',
        img: rtkStore,
        link: 'https://rtk-store-phi.vercel.app/'
    },
    {
        name: 'Movie-app-next',
        describe: 'this project was created to implement the omdb API with Nextjs14 + TypeScript.',
        img: nextmovie,
        link: 'https://movie-app-next-ts.vercel.app/'
    },
]

