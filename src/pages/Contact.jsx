import  emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from '../models/Fox'
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert, showAlert, hideAlert} = useAlert()


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

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
      showAlert({show:true, text:'Message sent Successfully' ,type:'success'});

      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        setForm({ name: "", email: "", message: "" });
      }, [3000]);

      // formRef.current.reset();
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show:true, text:'Something went wrong',type:'danger'});
    })
  };

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  return (
    <section className="relative flex flex-col md:flex-row max-container">

      {alert.show && <Alert {...alert}/>}
       
      {/* form */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-8">
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

      {/* 3d model */}
       <div className="w-full lg:w-1/2 lg:h-auto md:h-[550px]h-[350px]">
            <Canvas 
            camera={{
              position:[0, 0, 5],
              fov:75,
              near:0.1,
              far:1000   
            }}
            >

             <directionalLight intensity={2.5} position={[0, 0, 1]} />
             <ambientLight intensity={0.5} />

              <Suspense fallback={<Loader/>}>
                  <Fox   
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.6, -0.6, 0]}
                  scale={[0.5, 0.5, 0.5]}
                  />
              </Suspense>

            </Canvas>
       </div>

    </section>
  );
};
export default Contact;
