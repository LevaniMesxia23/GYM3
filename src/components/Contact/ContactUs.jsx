import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_85q5ouv', 'template_ijxyy2w', form.current, {
        publicKey: 'J0AOn-bhbOtNNwZ-d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-md ml-4 shadow-lg rounded-lg p-6 mt-10">

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>

          <input
            type="text"
            name="user_name"
            className="mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border border-[#4D4D4D] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full Name"
            required
          />
        </div>
        <div>

          <input
            type="email"
            name="user_email"
            className="mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border border-[#4D4D4D] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div>

          <input
            type="tel"
            name="user_phone"
            className="mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border border-[#4D4D4D] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Phone number"
            required
          />
        </div>
        <div>

          <textarea
            name="message"
            className="mt-1 px-3 py-2 bg-transparent text-white placeholder:text-[#C4C4C499] border border-[#4D4D4D] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="5"
            placeholder="Write your message"
            required
          />
        </div>
        
        <div className='flex justify-end'>
          <input
            type="submit"
            value="Send"
            className=" px-4 py-2 border-[#4D4D4D] border-[1px] text-[#C4C4C499] w-[35%] rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
