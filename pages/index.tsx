import type { NextPage } from 'next'
import Head from 'next/head'
import { FormProvider, useForm } from 'react-hook-form'
import InputField from '../components/InputField'
import ResetForm from '../components/ResetButton'
import SelectField from '../components/SelectField'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const methods = useForm()
  const onSubmit = methods.handleSubmit(data => {
    alert("Tu cuenta se ha registrado exitosamente!")
    console.log(data);
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <h1>
        Crea tu usuario para que comiences tu membresía.
      </h1>
       <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <InputField name='Email' autocomplete={['@gmail.com', '@hotmail.com']} />
          <InputField name='Nombre'/>
          <InputField name='Apellido'/>
          <SelectField name='plan' options={["Basico", "Estandar", "Premium"]}/>
          <button>Siguiente</button>
        </form>
        <ResetForm/>
       </FormProvider>
    </div>
  )
}

export default Home
