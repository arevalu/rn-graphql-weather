import { Theme, ThemeProps } from '@core/styles/types';

const darkTheme: ThemeProps = {
  themeTitle: Theme.DARK,

  colors: {
    primary: '#504ED3',

    red: '#EB5757',
    yellow: '#F2C94C',

    gray1: '#333333',
    gray2: '#4F4F4F',
    gray3: '#828282',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#F2F2F2',
    white: '#FFFFFF',

    background: '#131419',
    paper: '#1C1C24',
    text: '#FFFFFF',

    inactiveIcon: '#FFFFFF',
  },

  boxShadow: 'rgba(0, 0, 0, 0.1)',
};

export default darkTheme;
