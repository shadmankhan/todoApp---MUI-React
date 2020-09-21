import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

function TodoHead() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" xs={8} sm={8}>
        <Toolbar>
          <Typography variant="h6" className={classes.typographyStyles}>
            Todo Application
          </Typography>
          <ListAltIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TodoHead;
