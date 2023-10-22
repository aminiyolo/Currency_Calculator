export interface ThemeColor {
  bgColor: string;
  fontColor: string;
}

interface Theme {
  light: ThemeColor;
  dark: ThemeColor;
}

const light: ThemeColor = {
  bgColor: '#f2f2f2',
  fontColor: '#000',
};

const dark: ThemeColor = {
  bgColor: '#000',
  fontColor: '#fff',
};

const mode: Theme = {
  light,
  dark,
};

export default mode;
