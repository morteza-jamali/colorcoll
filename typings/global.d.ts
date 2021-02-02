declare global {
  namespace RainBowNameSpace {
    namespace Theme {
      interface ITheme {
        dark: any;
        light?: any;
      }

      interface ITheme {
        dark?: any;
        light: any;
      }

      type ThemeProps = "dark" | "light";
    }
  }
}
