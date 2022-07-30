import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import InputField from '../components/InputField'
import ResetButton from '../components/ResetButton'
import ResetForm from '../components/ResetForm'
import SelectField from '../components/SelectField'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const methods = useForm()
  const isSubmitSuccessful = methods.formState.isSubmitSuccessful
  
  const onSubmit = methods.handleSubmit(data => {
    alert("Tu cuenta se ha registrado exitosamente!")
    console.log(data);
  })

  useEffect(()=>{
    if(isSubmitSuccessful){
      methods.reset()
    }
  }, [isSubmitSuccessful, methods])

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
          <SelectField name='Plan' options={["Basico", "Estandar", "Premium"]}/>
          <button>Siguiente</button>
        </form>
        <ResetButton/>
        <ResetForm/>
       </FormProvider>
    </div>
  )
}

export default Home
