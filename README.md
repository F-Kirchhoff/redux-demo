# State Management with Art Gallery project

This is an already implemented art-gallery with the following features (list is not comprehensive):

- A Spotlight page that displays a random art piece
- An Art-Pieces page that displays all art pieces
- A Favorites page that displays all art pieces marked as favorites
- A Details page that displays an art piece and lets you write comments
- Art pieces can be marked / unmarked as favorites on all pages
- Favorites and comments are persisted in localStorage

## Challenge

First make yourself familiar with the App and its features. You will find that this project is implemented using plain React states and prop drilling.

Choose another method / lib and rewrite the state management and keep / reimplement all features of the art gallery.

Choose between the following:

- Zustand
- Redux
- Jotai
- Context API

You can find example implementations for each library and for the Context API in the feature branches of the following Repo: [Art Gallery example implementations](https://github.com/ThomasF85/art-gallery)

## Bonus Challenge

If you open the art-pieces or favorites pages in your browser and you click the favorite button, every art piece preview will rerender. This is unnecessary, since only one art piece preview (the one you marked / unmarked as favorite) has changed.
You can check for this behavior by writing a console.log into the ArtPiecePreview component, or by using the React Developer Tools.

Find a way to only make the one art piece preview rerender that you marked / unmarked as favorite.

You can find some tips in the [React rerender cheat sheet](https://github.com/ThomasF85/react-rerender-cheat-sheet)
