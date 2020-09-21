import React, { useState } from "react";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Box,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useStyles from "./MUIStyles";
import "./Media.css";

function TodoWork() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();

  //////////////////////////////////
  //      Todo Input functions    //
  //////////////////////////////////

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const addTodo = () => {
    if (message === "") {
      alert("Enter a message!");
    } else {
      setMessages([...messages, message]);
    }
    console.log(messages);
    setMessage("");
  };

  ////////////////////////////////////
  //    Todo Drag & Drop functions  //
  ////////////////////////////////////

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    // ev.target.style.textDecoration = "line-through";
  };

  return (
    <center>
      <Typography variant="h4" className={classes.typographyStyles}>
        Make your to do list!
      </Typography>
      <Grid className={classes.inputContainerStyles}>
        <TextField
          className={classes.textfieldStyle}
          id="input-with-icon-textfield"
          value={message}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyboardArrowRightIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          className={classes.btnStyle}
          color="primary"
          onClick={addTodo}
        >
          Add Item
        </Button>
      </Grid>

      <Grid container xs={12}>
        <Paper
          container
          className={classes.containerStyle}
          variant="outlined"
          id="paperGrid"
          square
        >
          <Box id="box1">
            <Typography className={classes.typographyStyle} variant="h6">
              Todo
              </Typography>
            <Paper
              id="paper1"
              className={classes.paperStyle}
              elevation={8}
              xs={4}
              onDrop={drop}
              onDragOver={allowDrop}
            >
              <Typography>
                <ul>
                  {messages.map((message, index) => {
                    return (
                      <li
                        draggable="true"
                        onDragStart={drag}
                        id="drag1"
                        key={index}
                        style={{ cursor: "move" }}
                      >
                        {message}
                      </li>
                    );
                  })}
                </ul>
              </Typography>
            </Paper>
          </Box>
          <Box id="box2">
            <Typography className={classes.typographyStyle} variant="h6">
              Completed
              </Typography>
            <strike>
              <Paper
                id="paper2"
                className={classes.paperStyle}
                elevation={8}
                onDrop={drop}
                onDragOver={allowDrop}
              >
                <Typography>
                  <ul></ul>
                </Typography>
              </Paper>
            </strike>
          </Box>
        </Paper>
      </Grid>
    </center>
  );
}

export default TodoWork;
