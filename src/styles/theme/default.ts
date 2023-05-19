const theme = {
  grid: {
    container: {
      sm: "33.75rem",
      md: "45rem",
      lg: "60rem",
      xlg: "71.25rem",
      xxlg: "82.5rem"
    }
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.75rem" // 28px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.5rem", // 24px
    medium: "2rem", // 32px
    large: "2.5rem" // 40px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    background: "#1A1A1A",
    text: "#F2F2F2",

    gray_100:  "#F2F2F2",
    gray_200:  "#D9D9D9",
    gray_300:  "#808080",
    gray_400:  "#333333",
    gray_500:  "#262626",
    gray_600:  "#1A1A1A",
    gray_700:  "#0D0D0D",
    danger:  "#E25858",
    purple: "#8284FA",
    purple_dark: "#5E60CE",
    blue: "#4EA8DE",
    blue_dark: "#1E6F9F"

  }
} as const;

export default theme;


