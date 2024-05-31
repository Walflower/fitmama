import styles from "./ContactUs.module.css";
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";

export default function ContactUs() {
  return (
    <main className={styles.main}>
      <LeftNavigation />
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2>Let's talk with us</h2>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
          </p>
          <ul className={styles.contactDetails}>
            <li><i className="fas fa-map-marker-alt"></i> 1200 Toronto, Ontario.</li>
            <li><i className="fas fa-phone-alt"></i> +1 234 678 9108 99</li>
            <li><i className="fas fa-envelope"></i> example@fitmamahub.com</li>
          </ul>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" name="firstName" placeholder="First Name*" className={styles.inputField} />
            <input type="text" name="lastName" placeholder="Last Name*" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <input type="email" name="email" placeholder="Email*" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <input type="text" name="phoneNumber" placeholder="Phone Number*" className={styles.inputField} />
          </div>
          <div className={styles.formGroup}>
            <textarea name="message" placeholder="Your message..." className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </main>
  );
}
