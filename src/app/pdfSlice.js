import { createSlice } from "@reduxjs/toolkit";


const pdfSlice = createSlice({
  name: "pdf",

  initialState: {
    idHu: null,
    pdfUrl: null,
  },

  reducers: {
    setIdHu: (state, action) => {
      state.idHu = action.payload;
    },

    setPdfUrl: (state, action) => {
      state.pdfUrl = action.payload;
    },
  },
});

export const { setIdHu, setPdfUrl } = pdfSlice.actions;

export default pdfSlice.reducer;
