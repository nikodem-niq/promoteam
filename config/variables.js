const colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#00ff6a',
  lavenda: '#C2A1FE',
  red: '#D12D38',
}

const themes = {
  light: {
    primary: colors.white,
    secondary: colors.black,
    contrast: colors.green,
  },
  dark: {
    primary: colors.black,
    secondary: colors.white,
    contrast: colors.red,
  },
}

const breakpoints = {
  mobile: '800px',
}

const viewports = {
  mobile: {
    width: '375px',
    height: '650px',
  },
  desktop: {
    width: '1440px',
    height: '816px',
  },
}

module.exports = {
  colors,
  themes,
  breakpoints,
  viewports,
}
