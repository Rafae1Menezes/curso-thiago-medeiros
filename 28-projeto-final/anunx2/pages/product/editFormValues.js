import * as yup from 'yup'

const initialValues = {
   name: '',
   price: '',
   category: '',
   description: '',
   filesNew: [],
   filesOld: [],
}

const validationSchema = yup.object().shape({
   name: yup.string().required('Campo obrigatório'),

   price: yup
      .number()
      .typeError('Digite apenas números')
      .required('Campo obrigatório.'),

   category: yup.string().required('Campo obrigatório.'),

   description: yup
      .string()
      .min(10, 'Escreva uma descrição maior.')
      .required('Campo obrigatório.'),

   filesNew: yup.array(),

   filesOld: yup.array(),
})

export { initialValues, validationSchema }
