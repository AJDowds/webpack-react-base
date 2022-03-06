import * as React from "react"
import { CSSProperties } from "react"
import { Field, Form as FormikForm } from "formik"
import styled from "styled-components"
import { Icon } from "./Icon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: none;
  background-color: white;
  width: 100%;
  min-width: 250px;
  margin: 10px;
  &:focus {
    outline: none;
  }
`

export const InputIconHolder = styled.div`
  display: flex;
  border-radius: 4px;
  border: none;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`

export const StyledInput = styled(Field)`
  padding: ${(props) => (props.size === "small" ? "4px" : "8px")};
  border-radius: 4px;
  border: none;
  width: 100%;
  align-items: center;

  &:focus {
    outline: none;
  }
`

export const InputError = styled.div`
  color: red;
`

interface InputInterface {
  type?: string
  name: string
  placeholder?: string
  icon?: IconDefinition
  min?: string
  max?: string
  error?: any
  touched?: any
  style?: CSSProperties
  size?: string
  setFieldValue?: any
  onChange?: any
  component?: string
  value?: any
  disabled?: boolean
  rows?: number
}

export const Input: React.FC<InputInterface> = ({
  type,
  name,
  placeholder,
  icon,
  min,
  max,
  error,
  touched,
  setFieldValue,
  ...props
}) => {
  return (
    <InputWrapper {...props}>
      <span
        style={{
          position: "absolute",
          fontSize: 14,
          top: -20,
          left: 10,
          color: "white",
        }}
      >
        {placeholder}
      </span>
      <div style={{ display: "flex" }}>
        {icon && (
          <InputIconHolder>
            <Icon icon={icon} />
          </InputIconHolder>
        )}

        <StyledInput
          {...props}
          name={name}
          type={type}
          placeholder={placeholder}
          min={min ? min : null}
          max={max ? max : null}
        />
      </div>

      {error && touched ? <InputError>{error}</InputError> : null}
    </InputWrapper>
  )
}
