import { send } from 'emailjs-com';
import React, { useEffect, useState } from "react";
import "./contact.css"

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
    subject: '',
  })

  const [is_disabled, set_is_disabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_9b3gcql',
      'template_m1ahogt',
      toSend,
      'ACO9YslRgX-KqD0nY'
    )
      .then((response) => {
        set_is_disabled(true);
        setToSend({
          from_name: '',
          from_email: '',
          message: 'Thanks for contacting me!',
          subject: '',
        });
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk</h3>
          <p className="contact__details">Drop an email if you dont like forms!</p>
        </div>
      

        <form onSubmit={onSubmit} className="contact__form">
          <div className="contact__form-group">
            
            <div className="contact__form-div">
              <input name='from_name' type="text" className="contact__form-input" placeholder='Insert Name' value={toSend.from_name} onChange={handleChange}/>
            </div>

            <div className="contact__form-div">
              <input type="text" name='from_email' className="contact__form-input" placeholder='Insert Email' value={toSend.from_email} onChange={handleChange}/>
            </div>
          </div>

          <div className="contact__form-div">
            <input name='subject' type="text" className="contact__form-input" placeholder='Insert Subject' value={toSend.subject} onChange={handleChange}/>
          </div>

          <div className="contact__form-div contact__form-area">
            
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className='contact__form-input' 
              placeholder='Write a message'
              value={toSend.message}
              onChange={handleChange}
            ></textarea>

          </div>
          
          <button className="btn" type='submit' disabled={!toSend.message || toSend.from_name || toSend.subject || toSend.from_email}>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact