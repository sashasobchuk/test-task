import React from 'react';
import clas from './withCard.module.css'
import {Formik, Form, Field, ErrorMessage,} from 'formik';
import {useDispatch} from "react-redux";
import {togglePopUp} from "../redux/cards_Reducer";


const WithCard = (Card, card) => {

    const dispatch = useDispatch()
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'This field in required';
        }else if(values.name.length <12){
            errors.name = 'Should contain 12 characters';
        }
        if (!values.number) {
            errors.number = 'This field in required';
        }else if(isNaN(values.number)) {
            errors.number = 'Only letters allowed';
        }
        return errors;
    }

    const EnterHandler = (values) => {
        console.log(`name: ${values.name}`)
        console.log(`number: ${values.number}`)
        dispatch(togglePopUp())
    }
    const onCloseHandle=()=>{
        dispatch(togglePopUp())
    }


    return (
        <div className={clas.WithCardContainer}>
            <button className={clas.close} onClick={onCloseHandle}>X</button>

            <div className={clas.cardContainer}>
                <Card card={card}  buyVisibility={false} justifing='center'/>

            </div>
                <Formik
                        initialValues={{name: '', number: ''}}
                        validate={validate}
                        onSubmit={(values, {setSubmitting}) => {
                            EnterHandler(values)
                        }}
                >
                    {({isSubmitting}) => (
                        <Form >

                            <button type="submit" className ={clas.order_btn}  disabled={isSubmitting}>
                                ORDER
                            </button><br/>

                            <Field id='name' placeholder='Name' className={clas.name} type="text" name="name"/>
                            <ErrorMessage name="name" className={clas.error} component="div"/>


                            <Field id='number' placeholder='Jonny111' className={clas.number} type="text" name="number"/>
                            <ErrorMessage name="number"  className={clas.error} component="div"/>

                        </Form>
                    )}
                </Formik>

        </div>
    );
};

export default WithCard;
