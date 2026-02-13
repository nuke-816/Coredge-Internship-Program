import React, { useState } from 'react';



function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
    if (!name && !email && !message) {
        alert('Please fill in all fields');
        return;
    }
    setSuccess(true);

    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSuccess(false), 5000);
}
    


  return (
<div className="form-container">   
    <form onSubmit={handleSubmit}>

    <div className="input-group">
        <label>Name:</label>
        <input
        type="text"  
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div className="input-group">
        <label>Email:</label>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div className="input-group">
        <label>Message:</label>
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
    </div>

        <button type="submit">Submit</button>
    </form>
        {success && 
        <p
        className='success-msg' 
        style={{color :"green"}}>Form submitted successfully!</p>}
</div>
    );
}

export default ContactForm;