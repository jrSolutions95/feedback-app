import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h2>About this project</h2>
            <p>This project was created to practice React and Redux..</p>
            <p>Verstion Alpha 1.0.0</p>

            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
