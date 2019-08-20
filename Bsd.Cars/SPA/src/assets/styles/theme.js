const general = {
  generalPrimaryColor: '#22262F',
};

const headerTheme = {
  primary: '#22262F',
  secondary: '#2FA38D',
  white: '#ffffff',
  purple: '#776f96',
  grey: '#9c9b9b',
  lightgrey: '#b8bbc1',
};

const table = {
  tableHeaderBackgroundColor: headerTheme.white,
  tableBorderColor: '#dddddd',
  tableTrBGColor: '#4e5565',
  tableHover: '',
};

const loading = {
  loadingBackgroundColor: headerTheme.white,
};

const theme = {
  ...loading,
  ...headerTheme,
  ...table,
  ...general,
};

export {theme};
