import * as React from "react"
import styled from "styled-components"

interface SectionInterface {
  title?: string
  subtitle?: string
  dark: boolean
  id: string
}

const SectionWrapper = styled.div<{ dark?: boolean }>`
  height: 100vh;
`

const SectionContent = styled.div<{ dark?: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.dark ? "#2B2B2B" : "#423F3E")};
`

export const Section: React.FC<SectionInterface> = ({
  title,
  subtitle,
  dark,
  id,
  children,
}) => {
  return (
    <SectionWrapper>
      <SectionContent dark={dark} id={id}>
        {children}
      </SectionContent>
    </SectionWrapper>
  )
}
