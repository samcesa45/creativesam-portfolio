'use client';
import React, { useState } from 'react';
import SectionWrapper from '../section_wrapper/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import EarthCanvas from '../canvas/earth';
import emailjs from '@emailjs/browser';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { Spinner } from '@/app/Loader';
import { cn } from '@/lib/utils';

type FormErrors = {
  [key: string]: string;
};
const Contacts = () => {
  const MySwal = withReactContent(Swal);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    let newErrors = { ...errors };

    //validate the inputs
    switch (name) {
      case 'name':
        if (value.length < 3) {
          newErrors.name = 'Name must be at least 3 characters long';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        let validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!value.match(validRegex)) {
          newErrors.email = 'Email must be of form test@gmail.com';
        } else {
          delete newErrors.email;
        }
        break;
      case 'message':
        if (value.length < 10) {
          newErrors.message = 'Message must be at least 10 characters long';
        } else {
          delete newErrors.message;
        }
        break;
      default:
        break;
    }

    //update form data state and errors state
    setForm({ ...form, [name]: value });

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      emailjs
        .send(
          'service_cfb27bs',
          'template_gic3duo',
          {
            form_name: form.name,
            to_name: 'Sam',
            from_email: form.email,
            to_email: 'samdevcoder45@gmail.com',
            message: form.message,
          },
          'NdLC8TfN5gfq-_mYl',
        )
        .then(() => {
          setLoading(false);
          MySwal.fire({
            title: 'Thank you. I will get back to you as soon as possible.',
          });
          setForm({
            name: '',
            email: '',
            message: '',
          });
        })
        .then((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay=""
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h3>

        <form
          action=""
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              key="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && (
              <span className="text-red-500 mt-2">{errors.name}</span>
            )}
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="text"
              key="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500 mt-2">{errors.email}</span>
            )}
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Enter Message</span>
            <textarea
              rows={3}
              name="message"
              key="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-500 mt-2">{errors.message}</span>
            )}
          </label>

          <button
            className={cn(
              'text-white',
              (loading || !isValid || Object.keys(errors).length !== 0) &&
                'disabled:text-gray-400 disabled:cursor-not-allowed',
            )}
            type="submit"
            aria-label="submit"
            disabled={loading || (!isValid && Object.keys(errors).length !== 0)}
          >
            {loading ? <Spinner /> : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contacts, 'contact');
