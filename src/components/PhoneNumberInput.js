import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        country="US"
        
      />
    </div>
  )
}

export default PhoneNumberInput