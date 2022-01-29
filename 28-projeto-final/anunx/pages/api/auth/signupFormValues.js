import * as yup from 'yup'

const initialValues = {
   name: '',
   city: '',
   phone: '',
   email: '',
   password: '',
   passwordConf: '',
}

const validationSchema = yup.object().shape({
   name: yup.string().required('Campo obrigatório'),

   city: yup.string().required('Campo obrigatório'),

   phone: yup
      .number()
      .typeError('Digite apenas números')
      .required('Campo obrigatório.'),

   email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório.'),

   password: yup
      .string()
      .min(6, 'Escreva uma senha maior.')
      .max(100, 'Senha muito grande.')
      .required('Campo obrigatório.'),

   passwordConf: yup
      .mixed()
      .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
      .required('Campo obrigatório.'),
})

export { initialValues, validationSchema }
