import React from 'react'

import PropTypes from 'prop-types'
import {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled,
} from './CheckboxStyledComponents'

const Checkbox = ({
    inputId,
    label
  }) => (
  <CheckboxGroupStyled>
    <CheckboxInputStyled
      type="checkbox"
      id={inputId}
    />
    <CheckboxLabelStyled htmlFor={inputId}>
      {label}
    </CheckboxLabelStyled>
  </CheckboxGroupStyled>
)

Checkbox.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string,
}

export default Checkbox