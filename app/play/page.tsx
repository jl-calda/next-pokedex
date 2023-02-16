// "use client";

// import { useEffect, useState } from "react";
// import pokemonData from "../../data/pokemon.json";
// import uniqueRandom from "unique-random";
// import Image from "next/image";
// import { Pokemon } from "../../typings/pokemon";

// const Play = () => {
//   const [answer, setAnswer] = useState<Pokemon | undefined>(undefined);
//   const [choices, setChoices] = useState<Pokemon[] | undefined>(undefined);
//   const [playAgain, setPlayAgain] = useState<boolean>(false);

//   useEffect(() => {
//     handleNewGame();
//   }, []);

//   const handleCheckAnswer = (e) => {
//     e.preventDefault();
//     const value = e.target.innerText.toLowerCase();
//     console.log(value);
//     if (value === answer.name) {
//       console.log("correct");
//       showImage();
//       handlePlayAgain();
//       // handleNewGame();
//     }
//   };

//   const handlePlayAgain = () => {
//     //show modal with play again button
//     //if play again is clicked, set playAgain to true
//     //if playAgain is true, run handleNewGame
//     //alert with yes and no

//     const answer = window.confirm("Play again?");
//     if (answer) {
//       handleNewGame();
//     } else {
//       console.log("no");
//     }
//   };

//   const hideImage = () => {
//     const img = document.getElementById(answer.id);
//     img?.classList.remove("brightness-100");
//     img?.classList.add("brightness-0");
//   };

//   const showImage = () => {
//     const img = document.getElementById(answer.id);
//     img.classList.remove("brightness-0");
//     img.classList.add("brightness-100");
//   };

//   const handleNewGame = () => {
//     setTimeout(() => {
//       const random = uniqueRandom(0, pokemonData.pokemons.length - 1);
//       const randomChoices = [random(), random(), random(), random()];
//       const answerRandom = uniqueRandom(0, randomChoices.length - 1);

//       const answerIndex = randomChoices[answerRandom()];

//       console.log("answerIndex", answerIndex);
//       setChoices(randomChoices.map((choice) => pokemonData.pokemons[choice]));
//       console.log(choices);
//       setAnswer(() => pokemonData.pokemons[answerIndex]);
//       hideImage();
//     }, 1500);
//   };

//   return (
//     <div className="flex-1 h-full flex flex-col">
//       {/* row 1 */}
//       <div className="relative">
//         <Image
//           src="/whos-that.png"
//           alt="Who's that pokemon"
//           width={400}
//           height={400}
//           className="relative"
//         />
//         {answer && (
//           // console.log(
//           //   answer
//           // )
//           <Image
//             src={answer.images.front}
//             id={answer.id}
//             alt={answer.name}
//             width={200}
//             height={200}
//             className="brightness-0 contrast-100 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 saturate-150"
//           />
//         )}
//       </div>
//       <div>
//         {}
//       </div>
//       {/* row 2 */}

//       <ul className="grid grid-cols-2 space-x-2 space-y-2 place-content-center">
//         {choices &&
//           choices.map((choice, index) => (
//             <li
//               className="rounded-full uppercase text-white font-extrabold tracking-widest"
//               style={{
//                 background: `linear-gradient(135deg, ${choice.colors.front},${choice.colors.shiny},${choice.types[0].color})`,
//               }}
//               key={index}
//               onClick={handleCheckAnswer}
//             >
//               {choice.name}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Play;
