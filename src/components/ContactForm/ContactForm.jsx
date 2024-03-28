import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
    const dispatch = useDispatch();
    
    const handleContact = (values, actions) => {
        dispatch(addContact(values)); 
        actions.resetForm();
    };
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, "Too short!").max(50, "Too long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format').required("Required"),
    });

    const validateNumber = (e) => {
        if (e.target.name !== `number`) return;
        const number = e.target.value.replace(/\D/g, ``);;
        let validate = number.slice(0, 3);
        if (number.length > 3) validate += "-" + number.slice(3, 6);
        if (number.length > 6) validate += "-" + number.slice(6, 10);

        e.target.value = validate;
    }

    return (
        <div className={css.contactForm}>
            <Formik onSubmit={handleContact} initialValues={{ name: '', number: '' }} validationSchema={FeedbackSchema}>
                <Form className={css.card}>
                    <label className={css.label}>Name</label>
                    <Field className={css.input} type="text" name="name" placeholder="Enter the name"/>
                    <span className={css.error}>
                        <ErrorMessage  name="name" />
                    </span>

                    <label className={css.label}>Phone</label>
                    <Field
                        type="text"
                        name="number"
                        placeholder="Enter the phone"
                        className={css.input}
                        onInput={validateNumber}
                    />
                    <span className={css.error}>
                        <ErrorMessage  name="number" />
                    </span>

                    <button className={css.button} type="submit" >Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}
