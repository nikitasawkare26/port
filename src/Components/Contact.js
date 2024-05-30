import React from 'react'
const Contact = () => {
  return (
    <>
    <section  id="contact">
       <h1 class="contact-title">Contact Me</h1>
       <div class="contact-container">
        <div class="contact-card">
            <form action="#" method="post">
                <div class="contact-form-group">
                    <label for="contact-name">Name:</label>
                    <input type="text" id="contact-name" name="name" required/>
                </div>
                <div class="contact-form-group">
                    <label for="contact-email">Email ID:</label>
                    <input type="email" id="contact-email" name="email" required/>
                </div>
                <div class="contact-form-group">
                    <label for="contact-address">Address:</label>
                    <input type="text" id="contact-address" name="address"/>
                </div>
                <div class="contact-form-group">
                    <label for="contact-query">Query:</label>
                    <textarea id="contact-query" name="query" required></textarea>
                </div>
                <button type="submit" class="contact-submit-btn">Submit</button>
            </form>
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Contact;