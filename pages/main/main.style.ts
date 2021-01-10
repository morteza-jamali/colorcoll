export default function styles(theme: any) {
  return {
    grow: {
      flexGrow: 1,
    },
    appBar: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    card: {
      height: "100%",
    },
    grid: {
      padding: "24px",
      flexGrow: 1,
    },
  };
}
