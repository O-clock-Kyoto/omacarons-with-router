import { useState } from 'react';

function Footer({ nbMacarons }) {
  // STATE pour stokce rle compteur du footer
  const [count, setCount] = useState(60);

  // return juste le JSX du footer
  return (
    <footer className="footer">
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
          // ATTENTION on ne doit jamais modifier le state directement
          // count = count + 1 --> INTERDIT !!!
          setCount(count + 1);
        }}
        type="button"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          // reset le compteur
          setCount(0);
        }}
      >
        reset
      </button>
      <p>{nbMacarons} macarons dispos</p>
    </footer>
  );
}

export default Footer;
