export const getNavigatorLocale = () => {
  //use  navigator["xxx"] because typescript shows has not this property
  const locale =
    navigator['userLanguage'] ||
    (navigator.languages &&
      navigator.languages.length &&
      navigator.languages[0]) ||
    navigator.language ||
    navigator['browserLanguage'] ||
    navigator['systemLanguage'];
  return locale.toLowerCase();
};
