
import ContactCard from "@/app/components/ContactCard";
import styles from "./styles.module.css";
import ContactForm from "@/app/components/ContactForm";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard />
      <div className={styles.contact_section}>
        <h2>
          We&apos;d love to hear <span> from you </span>
        </h2>
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.49522699068!2d88.56481638495774!3d24.38022665917106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6714fb929a34af1%3A0x46b71b9ddd226121!2sRashad%20Stack!5e0!3m2!1sen!2sbd!4v1685217802376!5m2!1sen!2sbd"
        width={100}
        height={450}
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      />
    </section>
  );
}
