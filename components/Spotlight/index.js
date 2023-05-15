import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/index.js";
import { toggleFavorite } from "@/lib/artPiecesInfoSlice.js";
import { useSelector, useDispatch } from "react-redux";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function Spotlight({ image, artist, slug }) {
  const artPiecesInfo = useSelector((state) => state.artPiecesInfo.artPieces);
  const dispatch = useDispatch();

  const isFavorite = artPiecesInfo.find(
    (piece) => piece.slug === slug
  )?.isFavorite;

  return (
    <Wrapper>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => dispatch(toggleFavorite(slug))}
          positionAbsolute={true}
        />
        <StyledImage
          src={image}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${artist}`}
        />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
