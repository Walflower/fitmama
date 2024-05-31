import styles from "./FAQ.module.css";
import { useState } from 'react';
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation";
import BlueButton from "../../components/BlueButton/BlueButton";
import Frances from "../../assets/Images/Network/Frances.png";
import Martha from "../../assets/Images/Network/Martha.png";
import Matilda from "../../assets/Images/Network/Matilda.png";
import Luna from "../../assets/Images/Network/Luna.jpg";
import Samantha from "../../assets/Images/Network/Samantha.jpg";
import Crystal from "../../assets/Images/Network/Crystal.jpg";

const faqData = [
  {
    question: "What is The Fit Mama Hub web app?",
    answer: "The Fit Mama Hub web app is a comprehensive resource designed for mothers with children, offering fitness guidance, nutritional advice, and community support.",
 
  },
  {
    question: "How can I create a profile on The Fit Mama Hub ?",
    answer: "You can create a profile on The Fit Mama Hub by signing up on our website or mobile app, entering your details, and setting up your preferences.",
  
  },
  {
    question: "How do moms in the community match with each other?",
    answer: "Moms in the community match with each other based on shared interests, location, and children’s age groups to foster relevant and supportive connections.",
    
  },
  // Add more FAQs as needed
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className={styles.main}>
      <LeftNavigation />
      <h1 className={styles.faqHeader}>Frequently Asked Questions</h1>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 onClick={() => toggleFAQ(index)} className={styles.faqQuestion}>
              {faq.question}
            </h3>
            <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : ''}`}>
             
              <p>{faq.answer}</p>
            </div>
          </div>
          
        ))}
       
      </div>
    </main>
  );
}
