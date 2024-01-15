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
      state.messageSaved = "";
    },
    setNotes: (state, actions) => {
      state.notes = actions.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
      //TODO: mensaje de error
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      state.isSaving = false;

      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
