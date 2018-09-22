import React from 'react';
import { Row, Input } from 'react-materialize';

function ExerciseInput(props) {
    return(
        <div>
            <Row>
                <Input s={4} onChange={props.updateExercise} type='select' label="Select Exercises" >
                <option value={0}>Choose an exercise</option>
                {props.exerciseData.map(exercises => <option value={exercises._id} key={exercises._id}>{exercises.name}</option>)}
                </Input>
                <Input s={3} label="Reps"  onChange={props.updateReps} />
                <Input s={4} label="Frequency"  onChange={props.updateFreq} />
                
            </Row>
        </div>
    )
}

export default ExerciseInput;
