"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3fn3d5q",
        "template_k75jrfr",
        form.current,
        "oeP2CdHS4lol_O1Ab"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="container">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let&apos;s get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                <p>Dhaka Bangladesh</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                <p>TechIt@gmail.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <p>+880 1741027141</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us:</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-blue-400 text-white p-2 rounded-full"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="bg-blue-300 text-white p-2 rounded-full"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-pink-600 text-white p-2 rounded-full"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>

          <section className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendEmail}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Username"
                  className="input"
                />
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="input"
                />
                <span>Email</span>
              </div>

              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input"
                />
                <span>Phone</span>
              </div>
              <div className="input-container bg-[#1abc9c]">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="input"
                ></textarea>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn1" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
