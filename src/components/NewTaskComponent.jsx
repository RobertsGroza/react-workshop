import React from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from "react-datepicker";
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { postTask } from '../redux/actions/tasks';

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    postTask: (task, userId) => {dispatch(postTask(task, userId))}
})

const DatePickerField = ({ name, value, onChange }) => {
    return (
        <DatePicker
            className="form-control"
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
            dateFormat="yyyy-MM-dd"
        />
    );
};

const customInputForm = ({field, form: {touched, errors}, ...props}) => (
    <>
        <Input
            invalid={!!(touched[field.name] && errors[field.name])}
            {...field}
            {...props} />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
    </>
);

const NewTaskForm = ({user, postTask}) => {

    const handleSubmit = (values) => {
        postTask(values, user.id)
    }

    return (
        <div className="container" style={{marginTop: 50}}>
            <h2>New task</h2>
            <Formik
                initialValues={{ name: '', description: '', priority: 'low', due: null }}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Field type="text" name="name" validate={value => !value ? 'Task name is required' : null } component={customInputForm}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Field type="textarea" name="description" component={customInputForm}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="priority">Priority</Label>
                            <Field 
                                name="priority" 
                                render={(props) => {
                                    const { field } = props;
                                    return (
                                        <Input type="select" name="priority" {...field}>
                                            <option value="low">Low</option>
                                            <option value="normal">Normal</option>
                                            <option value="high">High</option>
                                        </Input>
                                    )
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="due">Due</Label> 
                            <div>
                                <DatePickerField
                                    name="due"
                                    value={values.due}
                                    onChange={setFieldValue}
                                />
                            </div>
                        </FormGroup>
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);
