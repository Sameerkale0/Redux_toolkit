import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});
console.log(store.getState());
// console.log(songsSlice.actions.addSong());
// console.log(store);

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song"
// });

// store.dispatch(
//   songsSlice.actions.addSong("SOngs")
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store, reset, addSong, removeSong, addMovie, removeMovie };
// console.log(moviesSlice.actions.reset.toString());
