import ArtPieces from "../../components/ArtPieces";
import { useSelector } from "react-redux";

export default function FavoritesPage({ pieces }) {
  const artPiecesInfo = useSelector((state) => state.artPiecesInfo.artPieces);

  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return <ArtPieces pieces={favorites} />;
}
