// actions.js
// Ces actions définissent les types d'événements qui peuvent modifier l'état du compteur.
// Action pour augmenter le compteur
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
   };
   // Action pour diminuer le compteur
   export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
   };
   
   
   
   
   