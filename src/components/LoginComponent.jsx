import React, { useState, useEffect } from 'react';
import { Input, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/auth';

const mapDispatchToProps = (dispatch) => ({
    logIn: (username) => {dispatch(logIn(username))}
})

const Login = (props) => {
    const [value, setValue] = useState('');
    const [numberCount, setNumberCount] = useState(0);

    useEffect(() => {
        console.log('hooks: useEffect on any change');
    });

    useEffect(() => {
        console.log('hooks: useEffect just on mount');
    }, []);

    useEffect(() => {
        console.log(`hooks: useEffect just on number count change. BTW numberCount is ${numberCount}`);
    }, [numberCount]);

    const handleSubmit = (username) => {
        props.logIn(username);
    }

    return (
        <div className="container">
            <Row style={{marginTop: '100px'}}>
                <Col md={5} xs={12} className="mx-auto">
                    <h2>What is your name?</h2>
                    <Input 
                        className="mb-3" 
                        onChange={el => {
                            let val = el.target.value;

                            setValue(val);
                            setNumberCount(val.replace(/[^[0-9]/g, '').length);
                        }} 
                    />
                    <Button onClick={() => handleSubmit(value)}>Proceed</Button>
                </Col>
            </Row>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Login);
