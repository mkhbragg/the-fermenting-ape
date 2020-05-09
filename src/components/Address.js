import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import Account from './Account'
import Image from './image'

const SignIn = () => {
  const [accountView, setAccountView] = useState(false)
  const form = useFormState({
    values: {
      street: '',
      city: '',
      state: ''
    },
    onValidate: (values) => {
      if (!values.street) {
        const errors = {
          street: 'How can we be friends without knowing your street?',
        }
        throw errors;
      }
    },
    onSubmit: (values) => {

      console.log(JSON.stringify(values, null, 2))
    },
  })

  const formView = (
    <>
      <Form {...form}>
        <FormLabel {...form} name='street'>Street address</FormLabel>
        <FormInput {...form} name='street' placeholder='123 Main St' />
        <FormMessage {...form} name='street' />
        <FormLabel {...form} name='city'>City</FormLabel>
        <FormInput {...form} name='city' placeholder='Blacksburg' readOnly />
        <FormMessage {...form} name='city' />
        <FormLabel {...form} name='state'>State</FormLabel>
        <FormInput {...form} name='state' placeholder='VA' readOnly />
        <FormMessage {...form} name='state' />
        <FormSubmitButton {...form}>Submit</FormSubmitButton>
      </Form>
      <p>We are currently only serving Blacksburg, Virginia. If things go well, we can expand!</p>
      <Image style={{height: `2rem`}} filename='openmoji/svg-black/1F601.svg' alt='beaming smile' />
    </>
  )

  return (
    <>
      <Account />
    </>
  )
}

export default SignIn
