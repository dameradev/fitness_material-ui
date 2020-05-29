import React, { Fragment, Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
// import {} from "@material-ui/Dialog";

const styles = (theme) => ({
  FormControl: {
    width: 500,
  },
});

class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: "",
    },
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value,
      },
    });
  };

  handleSubmit = () => {
    const { exercise } = this.state;

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, "-"),
    });
    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: "",
      },
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles },
    } = this.state;

    const { muscles: categories, classes } = this.props;

    return (
      <Fragment>
        <Button
          color="secondary"
          mini
          style={{ background: "#fff", color: "#000" }}
          onClick={this.handleToggle}
        >
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>

            <form style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
                className={classes.FormControl}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Muscles"
                value={muscles}
                onChange={this.handleChange("muscles")}
                helperText="Please select muscle group "
                variant="filled"
                className={classes.FormControl}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                className={classes.FormControl}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Create);
