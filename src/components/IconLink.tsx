import * as React from "react"
import styled from "styled-components"
import { Icon } from "./Icon"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const LinkContainer = styled(Link)`
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

export const IconLinkText = styled.h6`
  color: #444444;
  margin-bottom: 0;
  &:hover {
    color: #222222;
    text-decoration: none;
  }
`

interface IconLinkInterface {
  icon: IconDefinition
  to: string
  onClick?: () => void
  className?: any
}

export const IconLink: React.FC<IconLinkInterface> = ({
  icon,
  to,
  onClick,
  children,
  className,
}) => {
  return (
    <LinkContainer className={className} to={to} onClick={onClick}>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>
      <TextContainer>
        <IconLinkText>{children}</IconLinkText>
      </TextContainer>
    </LinkContainer>
  )
}
