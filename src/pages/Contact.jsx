import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = () => {};

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
