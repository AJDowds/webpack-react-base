import * as React from "react"

import MuiSlider, { SliderProps as MuiSliderProps } from "@mui/material/Slider"
import { FieldProps } from "formik"
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export interface SliderProps
  extends FieldProps,
    Omit<MuiSliderProps, "name" | "value" | "defaultValue"> {}

export function fieldToSlider({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: SliderProps): MuiSliderProps {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    name: field.name,
    value: field.value,
  }
}

export const Slider: React.ComponentType<SliderProps> = (
  props: SliderProps
) => {
  return <MuiSlider {...fieldToSlider(props)} onChange={props.onChange} />
}
