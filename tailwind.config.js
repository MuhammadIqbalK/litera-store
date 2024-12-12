export const content = [
  "./src/**/*.{js,jsx,ts,tsx,html}", // ini untuk memastikan Tailwind memindai semua file JS/JSX di proyek kamu
];
export const theme = {
  extend: {
    colors: {
      "custom-blue": "#1e40af", // contoh menambahkan warna kustom
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
};
export const plugins = [];
