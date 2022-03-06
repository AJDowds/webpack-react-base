import styled from "styled-components"

export const Button = styled.button`
  background-color: #1a73e8;
  border: none;
  border-radius: 2px;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  color: white;
  max-width: 380px;
`

export const SubmitButton = styled.button`
  background-color: #1a73e8;
  border: none;
  border-radius: 4px;
  padding: 14px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  color: #ffffff;
  max-width: 380px;
  min-width: 200px;
`

export const DeletionButton = styled(SubmitButton)`
  padding: 4px;
  margin-top: 6px;
  color: black;
  max-width: 380px;
  min-width: 80px;
  margin: 4px;
  font-weight: 400;
`

export const ConfirmButton = styled(DeletionButton)`
  background-color: #28a745;
  color: #fff;
`

export const CancelButton = styled(DeletionButton)`
  background-color: #dc3545;
  color: #fff;
`
