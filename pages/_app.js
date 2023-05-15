import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import store from "./store";
import { Provider } from "react-redux";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // function addComment(slug, newComment) {
  //   setArtPiecesInfo((prev) => {
  //     const artPiece = prev.find((piece) => piece.slug === slug);
  //     if (artPiece) {
  //       return prev.map((pieceInfo) => {
  //         if (pieceInfo.slug === slug) {
  //           return pieceInfo.comments
  //             ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
  //             : { ...pieceInfo, comments: [newComment] };
  //         } else {
  //           return pieceInfo;
  //         }
  //       });
  //     } else {
  //       return [...prev, { slug, isFavorite: false, comments: [newComment] }];
  //     }
  //   });
  // }

  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} pieces={isLoading || error ? [] : data} />
      </Layout>
    </Provider>
  );
}
