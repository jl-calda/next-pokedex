## Pokedex app

Live Site : `jl-pokedex.vercel.app`(https://jl-pokedex.vercel.app/)

This app is developed using NextJS and tailwind css using `pokeapi`(https://pokeapi.co/). 
It is a practice project to learn NextJS and Typescript.
Pokemon data, was derived in the api route `/api/pokemon`. I decided to saved as JSON to save time fetching.

## Design
1) Background colors are derived from prominent colors of the pokemon photos and pokemon types.

## Routes
1) Homepage is redirected to `/browse/1`. `Browse` page is `SSR`. 12 Pokemons are shown each page.
2) Search page is redirect to `/search`. This page is served in client to make dynamic search possible.
3) Learn page is redirected to `/learn/[id]`. This page is `SSR` based on the pokemon id.
4) Play page is `/play` is client rendered. Minimum effects added for `ok` experience.

### Homepage
<img width="1157" alt="Screenshot 2023-02-19 at 8 25 56 PM" src="https://user-images.githubusercontent.com/102973841/219947977-f8e4a0e1-a1a1-4795-81a8-c0b1fced0a57.png">

### Search
<img width="1157" alt="Screenshot 2023-02-19 at 8 26 12 PM" src="https://user-images.githubusercontent.com/102973841/219948681-7dffafa3-85de-462f-9831-15bd03dafaa0.png">

### Learn
<img width="1157" alt="Screenshot 2023-02-19 at 8 26 32 PM" src="https://user-images.githubusercontent.com/102973841/219948759-043c4f9d-7a82-46eb-b13e-352b080a8ddc.png">

### Play
<img width="1157" alt="Screenshot 2023-02-19 at 8 26 45 PM" src="https://user-images.githubusercontent.com/102973841/219948773-fc938f53-e720-421c-b4b4-8b89ea32cfb5.png">

### To try run..

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

