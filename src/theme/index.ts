export const Theme = [
  { name: "Dark theme", value: "dark" },
  { name: "Light theme", value: "light" },
];

const colors = {
  black: "#030304",
  white: "FFFFFFF",
  pink: "#FF527D",
};

const black = "#030304";
const white = "FFFFFFF";

export const ThemeColor = {
  light: {
    name: "light",
    background: white,
    textColor: black,
  },
  black: {
    name: "black",
    background: black,
    textColor: white,
  },
};

const spaces = {
  i: 1,
  ii: 2,
  s: 5,
  so: 6,
  soo: 8,
  ss: 10,
  sss: 15,
  m: 20,
  mss: 30,
  mm: 40,
  mmm: 60,
  mmmm: 80,
  x: 100,
  xm: 120,
  xx: 200,
  xxx: 300,
  xxxx: 400,
  l: 500,
  z: 700,
  maxContentWidth: 1456,
};

const fonts = {
  s: 10,
  m: 24,
  x: 40,
  xx: 60,
  xxx: 80,
  weightX: 800,
};

const tops = { s: 210, m: 250, x: 300, xx: 340 };
const endPoints = {
  tabletL: 1220,
  tabletM: 1000,
  tablet: 900,
  phone: 495,
  fold: 300,
};

// export const GlobalTheme = (theme: "black" | "light") => {
//   const selectedTheme = ThemeColor[theme];
//   return {
//     ...selectedTheme,
//     spaces,
//     fonts,
//     tops,
//     endPoints,
//   };
// };
export const GlobalTheme = () => {
  return {
    colors,
    spaces,
    fonts,
    tops,
    endPoints,
  };
};
