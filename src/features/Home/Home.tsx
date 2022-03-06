import * as React from "react"
import { Section } from "@/components/Section"

export const Home: React.FC = () => {
  return (
    <div>
      <Section title="Section0" dark={false} id="section0">
        <h1
          style={{
            color: "white",
            letterSpacing: 1.5,
            fontSize: 60,
            textShadow: "0px 2px 4px rgb(0 0 0 / 89%)",
          }}
        >
          Section0
        </h1>
      </Section>
      <Section title="Section1" dark={true} id="section1">
        <h1
          style={{
            color: "white",
            letterSpacing: 1.5,
            fontSize: 60,
            textShadow: "0px 2px 4px rgb(0 0 0 / 89%)",
          }}
        >
          Section1
        </h1>
      </Section>
    </div>
  )
}
