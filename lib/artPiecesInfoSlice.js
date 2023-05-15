import { createSlice } from "@reduxjs/toolkit";

export const artPiecesInfoSlice = createSlice({
  name: "artPiecesInfo",
  initialState: {
    artPieces: [],
  },
  reducers: {
    addComment: (state, action) => {
      const { slug, newComment } = action.payload;

      const artPiece = state.artPieces.find((piece) => piece.slug === slug);

      if (!artPiece) {
        state.artPieces.push({
          slug,
          comments: [newComment],
        });
        return;
      }

      if (!artPiece.comments) {
        artPiece.comments = [];
      }
      artPiece.comments.push(newComment);
    },
    toggleFavorite: (state, action) => {
      const slug = action.payload;

      const artPiece = state.artPieces.find((piece) => piece.slug === slug);

      if (!artPiece) {
        state.artPieces.push({
          slug,
          isFavorite: true,
        });
        return;
      }

      artPiece.isFavorite = !artPiece.isFavorite;
    },
  },
});

export const { addComment, toggleFavorite } = artPiecesInfoSlice.actions;

export default artPiecesInfoSlice.reducer;
