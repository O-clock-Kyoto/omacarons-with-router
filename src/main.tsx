// useState est une fonction speciale importée de React, c'est un hook c'est à dire qu'elle n'a le droit d'etre utilisée que dans des composants (fonction qui return du JSX) et elle ne doit etre executée que à la racine du composant (pas dans des boucles, des conditions, des sous fonctions)
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// creer un element avec createElement de React c'est fastidieux
/*
const resultEltReact = React.createElement(
  'p',
  {
    className: 'result',
    // children est l'équivalent du textContent !
    // cette prop speciale peut avoir sa valeur filée direct en troiseme argument
  },
  'resultat : 0 ',
);
*/

// on fait donc avec du JSX , ça sera transpilé (buildé) en JS par notre transpiler (Babel)
/*
const resultEltReactEnJSX = (
  <div>
    <p className="result">
      resultat <span>0</span>
    </p>
    <button type="button">+</button>
    <button type="button">-</button>
  </div>
);
*/

// COMPOSANT : un composant est une fonction qui return du JSX
// on met une majuscule au debut du nom de la fonction composant
function App() {
  // ici on peut definir des variables (bidons: qui ne sont pas réactives)
  //let count = 55;

  // on peut aussi definird es variables réactives, des variables de state, on utilise useState
  const tableauAvec2lignes = useState(60);
  // je veux créer 2 variables à partir des 2 lignes de mon tableau, j'utilise la syntaxe du destructuring !
  const [count, setCount] = tableauAvec2lignes;

  return (
    <div>
      <p className="result">
        {/* dans le JSX on peut mettre des expressions JS si on les entoure d'accolades (un peu comme dans les template string) */}
        resultat <span>{count}</span>
      </p>
      <button
        // on ecoute le click et on execute le handler defini ici dans le JSX quand un click survient
        onClick={() => {
          console.log('click');
          // on veut incrementer le compteur, il faut utiliser le setter renvoyé par useState
          // on donne en paramètre au setter la nouvelle valeur de count
          setCount(count + 1);
        }}
        type="button"
      >
        +
      </button>
      <button type="button">-</button>
    </div>
  );
}

// la variable rootNode ets de type HTMLElement OU null
const rootNode = document.getElementById('root');

// createRoot attend un element qui ne soit pas null donc on utilise la non null assertion (!) pour dire à TS t'inquiete c'est pas null
const rootReactReceptacle = ReactDOM.createRoot(rootNode!);

// on fait le render du JSX renvoyé par le composant App
// rootReactReceptacle.render(App());
rootReactReceptacle.render(<App />);
