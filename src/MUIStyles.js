import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  //////////////////////////////////////////
  //      Todo Input Section MUI-Style    //
  //////////////////////////////////////////

  inputContainerStyles: {
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    marginLeft: "1%",
  },
  textfieldStyle: {
    marginRight: "1%",
    width: "30%",
  },
  typographyStyles: {
    marginTop: "20px",
  },

  ////////////////////////////////////////////
  //      Todo Output Section MUI-Style     //
  ////////////////////////////////////////////

  containerStyle: {
    display: "flex",
    marginTop: "40px",
    width: "100%",
    justifyContent: "space-evenly",
    textAlign: "left",
    paddingBottom: "10px",
  },

  paperStyle: {
    height: "300px",
    width: "300px",
    margin: "10px",
    padding: "20px 20px",
  },
  typographyStyle: {
    marginTop: "5px",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "oblique",
  },

}));

export default useStyles;
