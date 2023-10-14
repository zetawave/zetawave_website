import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    padding: "0.1rem",
    fontSize: "2.8rem",
    fontFamily: "IBM Plex Sans Condensed",
    textShadow: "1px 5px 10px rgb(0 0 0)",
  },
  textContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1.5rem",
  },
  bar: {
    backgroundColor: "#20C20E",
    width: "1.125rem",
    height: "3.75rem",
    marginLeft: "0.3rem",
    animation: "$flashing 0.8s infinite",
    boxShadow: "1px 5px 18px rgb(0 0 0)",
  },
  "@keyframes flashing": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default useStyles;
