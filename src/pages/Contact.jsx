import { useState, useRef } from "react";
import "../assets/styles/Contact.css";
import {
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaForward,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", form.current);

    emailjs
      .sendForm("service_6djqk5b", "template_portfoliobbogan", form.current, {
        publicKey: "bMqZOOfBGWqWsQD0H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error ocur during the mail sending");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaMailBulk,
      title: "Email",
      value: "ber24b.c@gmail.com",
      href: "mailto:ber24b.c@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+506 85883491",
      href: "tel:+50685883491",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Alajuela, Costa Rica",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/bernal-bogantes-conejo-a75308119/",
      label: "LinkedIn",
    },
    { icon: FaGithub, href: "https://github.com/BerConejo", label: "GitHub" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <div className="contact_header">
          <h2 className="contact_title">Get In Touch</h2>
          <p className="contact_description">
            Ready to start? Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact_content">
          {/* Contact Form */}
          <div className="contact_form-container">
            <h3 className="contact_form-title">Send Message</h3>

            <form onSubmit={handleSubmit} ref={form} className="contact_form">
              <div className="contact_form-group">
                <label htmlFor="name" className="contact_label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact_input"
                  placeholder="You're name"
                />
              </div>
              <div className="contact_form-group">
                <label htmlFor="email" className="contact_label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact_input"
                  placeholder="bernal@example.com"
                />
              </div>

              <div className="contact_form-group">
                <label htmlFor="subject" className="contact_label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact_input"
                  placeholder="Project or Job Inquiry"
                />
              </div>

              <div className="contact_form-group">
                <label htmlFor="message" className="contact_label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact_textarea"
                  placeholder="Tell me about..."
                ></textarea>
              </div>

              <button type="submit" className="contact_submit-btn">
                <FaForward className="contact_submit-icon" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact_info">
            <div className="contact_info-section">
              <h3 className="contact_info-title">Contact Information</h3>
              <div className="contact_info-list">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="contact_info-item"
                    >
                      <div className="contact_info-icon-container">
                        <Icon className="contact_info-icon" />
                      </div>
                      <div className="contact_info-details">
                        <h4 className="contact_info-label">{info.title}</h4>
                        <p className="contact_info-value">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="contact_social-section">
              <h3 className="contact_social-title">Follow Me</h3>
              <div className="contact_social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      title={social.label}
                      className="contact_social-link"
                    >
                      <Icon className="contact_social-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
