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

  handleCategorySelect = (category) => {
    this.setState({
      category,
    });
  };

  handleExerciseSelect = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  };

  handleExerciseCreate = (exercise) => {
    console.log(exercise);
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise],
    }));
  };

  render() {
    console.log(this.state);
    const exercises = this.getExerciesesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
