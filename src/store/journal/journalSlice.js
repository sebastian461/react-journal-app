import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null, //{id, title, body, date, imageURLs[""]}
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, actions) => {
      state.notes = actions.payload;
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteByIs: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  deleteNoteByIs,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
