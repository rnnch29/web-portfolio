import pokemon from '../assets/project/poke-api.png'
import rtkStore from '../assets/project/rtk-store.png'
import nextmovie from '../assets/project/nextmovie.png'
import reactImg from '../assets/icon/icons8-react-native-48.png'
import tailwindImg from '../assets/icon/icons8-tailwindcss-48.png'
import jsImg from '../assets/icon/icons8-js-48.png'
import tsImg from '../assets/icon/icons8-typescript-48.png'
import reduxImg from '../assets/icon/icons8-redux-48.png'
import nextImg from '../assets/icon/icons8-nextjs-48.png'

export const projects = [
    
    {
        name: 'Redux-Toolkit-Store',
        describe: 'Redux-Toolkit-Store project was created to implement the Fake Store API with Redux Toolkit.',
        img: rtkStore,
        link: 'https://rtk-store-phi.vercel.app/',
        stack: [
            reactImg,
            jsImg,
            tailwindImg,
            reduxImg
        ]
    },
    {
        name: 'Movie-app-nextJs',
        describe: 'this project was created to implement the omdb API with Nextjs14 + TypeScript.',
        img: nextmovie,
        link: 'https://movie-app-next-ts.vercel.app/',
        stack: [
            nextImg,
            tsImg,
            tailwindImg
        ]
    },
    {
        name: 'Poke-API',
        describe: 'This project involves converting a Figma design into HTML and practicing Poké API integration.',
        img: pokemon,
        link: 'https://pokedex-ten-smoky.vercel.app/',
        stack: [
            reactImg,
            jsImg,
            tailwindImg,
            reduxImg
        ]
    },
]

