import React from 'react'
import { Container } from 'react-bootstrap'

function ContactPage() {
  return (
    <Container className='text-center'>
        <div>
            <form action='https://formspree.io/f/maykrpwn' method='POST'>
                <input type='text' name='name' placeholder='Your Name' required autoComplete='off'/><br/>
                <input type='email' name='email' placeholder='Your email' required autoComplete='off'/><br/>
                <textarea rows='10' cols='30'name='textarea' placeholder='Your query' required autoComplete='off'/><br/>
                <button type='submit'>Send</button>
            </form>
        </div>

    </Container>
  )
}

export default ContactPage