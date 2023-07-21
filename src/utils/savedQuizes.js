const savedQuizes = {};

export const getSavedQuizes = () => {
  return savedQuizes;
};

export default savedQuizes;
// !In quizes.js have the app create a new array for each genre and when a user clicks the save icon next to the question it will add the name of that quiz to its genre. Then in saved.js we can iterate over all the names in genre to get the quizes.
// ?Create an SQLite database to store all data locally on users phone. So you can remove the data.js and savedQuizes.js
