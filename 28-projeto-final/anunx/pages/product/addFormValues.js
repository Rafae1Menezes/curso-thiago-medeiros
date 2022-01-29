import * as yup from 'yup'

const initialValues = {
   name: '',
   price: '',
   category: '',
   description: '',
   files: [],
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

   files: yup
      .array()
      .min(1, 'Envie pelo menos uma foto')
      .required('Campo obrigatório.'),
})

export { initialValues, validationSchema }
