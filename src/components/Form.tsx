import * as React from "react"
import { CSSProperties, ReactElement } from "react"
import { Formik, Form as FormikForm } from "formik"
import styled from "styled-components"

export const FormWrapper = styled(FormikForm)<{ width?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
`

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
`

export const InputWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  background-color: white;
  width: 100%;
  max-width: 380px;
  min-width: 250px;
  align-items: center;
  &:focus {
    outline: none;
  }
`

interface FormInterface {
  handleSubmit: (values) => void
  initialValues: any
  children(any): ReactElement
  validate?: any
  style?: CSSProperties
}

export const Form: React.FC<FormInterface> = ({
  validate,
  handleSubmit,
  initialValues,
  children,
  ...props
}) => {
  const handleKeyDown = (e, values) => {
    if (e.key === "Enter") {
      handleSubmit(values)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formikBag) => (
        <FormWrapper
          {...props}
          onKeyDown={(e) => handleKeyDown(e, formikBag.values)}
        >
          {children(formikBag)}
        </FormWrapper>
      )}
    </Formik>
  )
}
