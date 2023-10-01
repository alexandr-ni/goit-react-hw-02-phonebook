import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMsg,
  FormBtn,
  FormField,
  Label,
  StyledForm,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            <FormField name="name" type="text" required />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <FormField name="number" type="tel" required />
            <ErrorMsg name="number" component="div" />
          </Label>
          <FormBtn type="submit">Add contact</FormBtn>
        </StyledForm>
      </Formik>
    </div>
  );
};
