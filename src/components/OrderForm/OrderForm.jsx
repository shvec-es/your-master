'use client';
import { useId } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './OrderForm.module.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const validatePhone = (phone) => {
  return phone
    .split('')
    .reduce((num, el) => (el === ' ' || el === '-' ? num : num + el), '');
};

export default function OrderForm() {
  const fieldId = useId();

  const OrderFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Імʼя не може бути коротше 3 символів')
      .max(20, 'Імʼя занадто довге')
      .required('Імʼя обовʼязкове'),
    phone: Yup.string()
      .min(8, 'Номер не може бути менше 8 символів')
      .required('Номер телефона обовʼязковий')
      .matches(/^\+?[0-9\s\-()]{10,18}$/, 'Невірний номер телефону'),
  });

  const onFormSubmit = async (values, actions) => {
    const message = `
    <b>На вашому сайті YourMaster є запит</b>\n
    <b>👤 Ім’я:</b> ${values.name}
    <b>📞 Передзвоніть за номером</b> <a href="tel:${validatePhone(values.phone)}">${validatePhone(values.phone)}</a>
    <b>📝 Додаткова інформація:</b> ${values.text || 'не вказано'}
    <b>📅 Дата:</b> ${new Date().toLocaleString('uk-UA')}`;

    try {
      axios.post('api/send-message', { text: message });
      toast('Ваш запит відправлено🤩 Ми скоро вам передзвонимо, очікуйте!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        theme: 'dark',
      });
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', phone: '', text: '' }}
      onSubmit={onFormSubmit}
      validationSchema={OrderFormSchema}
    >
      <Form>
        <ToastContainer />
        <div className={s.orderInputWrapper}>
          <label className={s.orderFormLabel} htmlFor={`${fieldId}-name`}>
            Ваше імʼя*
          </label>
          <Field
            className={s.orderFormInput}
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Олександр"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <div className={s.orderInputWrapper}>
          <label className={s.orderFormLabel} htmlFor={`${fieldId}-phone`}>
            Номер телефону*
          </label>
          <Field
            className={s.orderFormInput}
            type="tel"
            name="phone"
            id={`${fieldId}-phone`}
            placeholder="067-777-77-77"
          />
          <ErrorMessage
            name="phone"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <div className={s.orderInputWrapper}>
          <label className={s.orderFormLabel} htmlFor={`${fieldId}-text`}>
            Можете коротко описати ваше питання
          </label>
          <Field
            as="textarea"
            className={s.orderFormTextarea}
            name="text"
            id={`${fieldId}-text`}
          />
          <ErrorMessage
            name="text"
            component="span"
            className={s.errorMessage}
          />
        </div>
        <button className={s.orderFormBtn} type="submit">
          Відправити заявку
        </button>
      </Form>
    </Formik>
  );
}
