import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const provinceOptions = [
    {
      text: 'Chonburi',
      value: 'chonburi',
    },
    {
      text: 'Songkhla',
      value: 'songkhla',
    }]

const DestinationDrop = () => (
  <Dropdown placeholder='Destination' fluid selection options={provinceOptions} className='borderless'/>
)

export default DestinationDrop