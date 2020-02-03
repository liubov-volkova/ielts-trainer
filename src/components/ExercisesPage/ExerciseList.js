import React from 'react';
import * as ROUTES from '../../constants/routes';
import * as EXERCISES from '../../constants/exercises';
import Exercise from '../ExercisesPage/Exercise';
class ExerciseList extends React.Component {
  static displayName = ExerciseList.name;

  render () {
    return (
      <div>
            <h1>ExerciseList</h1>
            <Exercise />
      </div>
    );
  }
}
export default ExerciseList;