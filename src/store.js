
// Crée le store en utilisant le reducer du compteur.
import { createStore } from 'redux';
import counterReducer from './reducers';
// Crée le store en utilisant le reducer du compteur
const store = createStore(counterReducer);
export default store;