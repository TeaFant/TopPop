export const fetchData = (callbackFn) => {
  fetch(
    "https://gist.githubusercontent.com/nanotaboada/a90ce99a9bc8ca3c63c0f1dfeb41d41d/raw/55b47f2da187d5d9c9f069d4e354d76ee806eded/songs.json"
  )
    .then((response) => response.json())
    .then((data) => {
      callbackFn(
        data.songs.sort(() => Math.random() - Math.random()).slice(0, 10)
      );
    });
};
