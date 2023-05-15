import Image from "next/image.js";
import styled from "styled-components";
import { toggleFavorite } from "@/lib/artPiecesInfoSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Button = styled.button`
  position: ${({ positionAbsolute }) =>
    positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 1.5rem;
  z-index: 1;
  background-color: ${(props) => (props.isFavorite ? "lightcoral" : "white")};
  border: 3px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const artPiecesInfo = useSelector((state) => state.artPiecesInfo.artPieces);
  const dispatch = useDispatch();

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === slug
  )?.isFavorite;

  return (
    <Button
      type="button"
      isFavorite={isFavorite}
      onClick={() => dispatch(toggleFavorite(slug))}
      aria-label={isFavorite ? "unlike" : "like"}
      positionAbsolute={positionAbsolute}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </Button>
  );
}
