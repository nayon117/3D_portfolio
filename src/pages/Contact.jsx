import  emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SEVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name:form.name,
      to_name:"Hasibul Hasan",
      from_email:form.email,
      to_email:"hasibul.nayon1@gmail.com",
      message:form.message
     },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      setForm({ name: "", email: "", message: "" });
      // formRef.current.reset();
    }).catch((error)=>{
      setIsLoading(false);
      console.log(error);
    })
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex flex-col md:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="" className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              required
              placeholder="Hasibul..."
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              required
              placeholder="hasibul@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              required
              placeholder="Let me know how i can help you"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
           type="submit" 
           className="btn"
           onFocus={handleFocus}
           onBlur={handleBlur} 
           disabled={isLoading}
          >
            {isLoading? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
