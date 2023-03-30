import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song", //name of slice, action type
  initialState: [],
  reducers: {
    addSong(state, action) {
      //addSong= name of reducer
      // console.log(state.length); //?? state only inside slice
      state.push(action.payload);
    },
    removeSong(state, action) {
      //action.payload === string, we want to remove the song
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }

  //  state = [] immer do not understands it, instead it will assign new value not state update
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
