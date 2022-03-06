import * as React from "react"
import { Fragment } from "react"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import styled, { CSSProperties } from "styled-components"
import { Icon } from "./Icon"

const CounterButton = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Counter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff5e5e;
  padding: 1px 3px 1px 2px;
  text-align: center;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12.5px;
  line-height: 14px;
`

interface IconCounterInterface {
  countable: any[]
  icon: IconDefinition
  onClick?: () => void
  style?: CSSProperties
}

export const IconCounter: React.FC<IconCounterInterface> = ({
  countable,
  icon,
  onClick,
  ...props
}) => {
  return (
    <Fragment>
      <CounterButton onClick={onClick} {...props}>
        <Icon style={{ fontSize: 20 }} icon={icon} />
        {countable && countable.length > 0 && (
          <Counter>{countable.length}</Counter>
        )}
      </CounterButton>
    </Fragment>
  )
}
