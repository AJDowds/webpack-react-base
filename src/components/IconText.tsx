import * as React from "react"
import styled from "styled-components"
import { Icon } from "./Icon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  display: flex;
  padding: 0 24px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #222222;
    text-decoration: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 24px;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.h6`
  color: #444444;
  margin-bottom: 0;
  &:hover {
    color: #222222;
    text-decoration: none;
  }
`

interface IconTextInterface {
  icon: IconDefinition
  onClick?: () => void
}

export const IconText: React.FC<IconTextInterface> = ({
  icon,
  onClick,
  children,
}) => {
  return (
    <Container onClick={onClick}>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>
      <TextContainer>
        <Text>{children}</Text>
      </TextContainer>
    </Container>
  )
}
