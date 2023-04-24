import { Formik } from 'formik';
import {useField} from "../hooks/hooks";

const initialValues = {
    name: '',
    email: '',
    message: '',
};

const ContactForm = ({ onSubmit }) => {
    const [name] = useField('');
    const [email] = useField('');
    const [message] = useField('');
    return (
        <div>
            <input {...name}/>
            <input {...email}/>
            <input {...message}/>
        </div>
    )
}

const Contact = () => {
    const onSubmit = values => {
        const email = parseFloat(values.email);
        console.log(`Message was sent`);
        console.log(email);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <ContactForm onSubmit={handleSubmit} />}
        </Formik>
    );
}

export default Contact