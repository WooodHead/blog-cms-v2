import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { DateNavigator } from '@devexpress/dx-react-scheduler-material-ui'

const NavigationButton: FC<DateNavigator.NavigationButtonProps> = ({
  type,
  onClick,
}) => (
  <Button variant="outlined" color="secondary" onClick={onClick}>
    {type}
  </Button>
)

export default NavigationButton
