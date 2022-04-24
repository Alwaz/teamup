import React from 'react'
import './_signup.scss'
import Button from '../../../Components/Button/Button'
import Heading from '../../../Components/heading/Heading'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup__left'>
            <Heading title={'Create An Account'} />
            <div className='signup__left__paragraph'>
                <p>
                    Get started building websites with less stress, premium components and elements that can be pasted into any webflow project.
                </p>
                <span className='signup__left__spanText'>
                    Welcome to the Club!
                </span>
            </div>
            <Button buttonValue={'Create'} />
        </div>   
        <div className='signup__right'>

        </div>  
    </div>
  )
}

export default Signup