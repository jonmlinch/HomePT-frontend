import React from 'react';
import { Button, Card, Row, Col, Input } from 'react-materialize';

function ExerciseInput(props) {
    return(
        <div>
            <Row>
                <Input s={4} type='select' label="Select Exercises" defaultValue='1'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
                </Input>
                <Input s={4} label="Reps" />
                <Input s={4} label="Frequency" />
            </Row>
        </div>
    )
}

export default ExerciseInput;