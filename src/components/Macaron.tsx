// pour filer des valeurs à notre fonction composant en paramètre on ajoute des props !

import { useState } from 'react';

function Macaron({ macaronToDisplay }) {
  // on peut ajouter un state dans ce composant uniquement
  const [like, setLike] = useState(0);

  // return le morceau de JSX qui dessine 1 macaron

  return (
    <div className="macaron">
      <button
        type="button"
        onClick={() => {
          setLike(like + 1);
        }}
        className="macaron__like"
      >
        {like}❤️
      </button>
      <div
        className="macaron__coque"
        // changement de la couleur avec du CSS-in-JS
        style={{ backgroundColor: macaronToDisplay.color }}
      />
      <div className="macaron__filling">{macaronToDisplay.flavour}</div>
      <div
        className="macaron__coque reversed"
        style={{ backgroundColor: macaronToDisplay.color }}
      />
    </div>
  );
}

export default Macaron;
