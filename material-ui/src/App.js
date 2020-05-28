import React, { Component, Fragment } from "react";

import { Header, Footer } from "./Components/Layouts";
import Exercises from "./Components/Exercises";

import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    category: "",
    exercise: {},
  };

  getExerciesesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = (category) => {
    this.setState({
      category,
    });
  };

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  };

  render() {
    console.log(this.state);
    const exercises = this.getExerciesesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
