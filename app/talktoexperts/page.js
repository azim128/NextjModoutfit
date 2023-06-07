'use client'
import Accordion from '@/components/Accordion';
import React, { useState } from 'react';
import * as Yup from 'yup';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required')
    });

    schema
      .validate({ name, email, subject, message }, { abortEarly: false })
      .then(() => {
        // Here, you can handle the form submission logic (e.g., sending an email)

        // Reset the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
      })
      .catch((error) => {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>

      <div className='flex justify-center items-center w-full gap-8'>
      <div className="mt-6 w-full h-full shadow-xl p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-4 w-full`}
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-4 w-full`}
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`border ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-4 w-full`}
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded py-2 px-4 w-full`}
              placeholder="Your message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-8 w-full  p-8 h-full">
      <div className="container mx-auto px-4 pb-6">
      <h2 className="text-2xl font-bold text-gray-800">Contact Map</h2>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.86600104132!2d90.25446554314888!3d23.780863190208223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1686069531066!5m2!1sen!2sbd"
          width="600"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
        <div>
        <div>
        <h2 className="text-lg font-bold text-gray-800">Address</h2>
        <p>123 Main Street, City, Country</p>
        </div>
        <div>
        <h2 className="text-lg font-bold text-gray-800">Address</h2>
        <p>123 Main Street, City, Country</p>
        </div>
        <div>
        <h2 className="text-lg font-bold text-gray-800">Address</h2>
        <p>123 Main Street, City, Country</p>
        </div>
        </div>
      </div>
      </div>

      <div className="mt-8">
        {/* Accordion component code */}
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default ContactUs;
