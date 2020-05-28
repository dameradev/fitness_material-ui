import React, { Fragment } from "react";

import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    height: 500,
    overflowY: "auto",
  },
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left.",
  } = {},
}) => {
  console.log(title);
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h5"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>

                <List component="nav" aria-label="secondary mailbox folders">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
