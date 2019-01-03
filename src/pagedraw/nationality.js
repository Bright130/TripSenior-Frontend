import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const nationOptions = [
    {
      text: 'Germany',
      value: 'germany',
    },
    {
      text: 'Malaysia',
      value: 'malaysia',
    }]

const NationDrop = () => (
  <Dropdown placeholder='Nationality' fluid selection options={nationOptions} className='borderless'/>
)

export default NationDrop