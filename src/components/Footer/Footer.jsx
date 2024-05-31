import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Help Center</h4>
          <ul>
            <li>Customer Support</li>
            <li>Affiliate Program</li>
            <li>Become a Partner</li>
            <li>Investor Relations</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Press</h4>
          <ul>
            <li>Advertise</li>
            <li>Support</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
            <li>Community</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Help</h4>
          <ul>
            <li>Forums</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Press Releases</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy and Cookies</li>
            <li>Returns and Exchanges</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 All right reserved</p>
        <div className={styles.footerSocials}>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;