import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
// import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          {/* <ContactForm /> */}
        </section>
      </div>

      <iframe
        src="
            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14719.958929229346!2d75.8432105304528!3d22.72862301163766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd77d4fefb53%3A0xc9460c4705f05626!2sMari%20Mata%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1722862811693!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
