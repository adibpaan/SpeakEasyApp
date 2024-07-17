import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/react';
import Lottie from 'lottie-react';
import animationData from './about-animate.json';
import './About.css';

const About: React.FC = () => {
  const [faqList] = useState([
    { question: "What is SpeakEasyApp?", answer: "SpeakEasyApp is a language learning app designed to improve your communication skills through interactive quizzes, presentations, and conversation practice." },
    // Add more FAQs as needed
  ]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="contact">
            <IonItem slot="header" color="light">
              <IonLabel>Contact Us</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>If you have any questions or feedback, please contact us at support@speakeasyapp.com or call us at +60 13-322 5607</p>
            </div>
          </IonAccordion>
          <IonAccordion value="disclaimer">
            <IonItem slot="header" color="light">
              <IonLabel>Disclaimer</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>The information provided on this app is for general informational purposes only. All information on the app is provided in good faith, however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the app.</p>
            </div>
          </IonAccordion>
          <IonAccordion value="service">
            <IonItem slot="header" color="light">
              <IonLabel>Use of Service</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>By using our service, you agree to comply with our terms and conditions. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.</p>
            </div>
          </IonAccordion>
          <IonAccordion value="terms">
            <IonItem slot="header" color="light">
              <IonLabel>Terms and Conditions</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>These terms and conditions outline the rules and regulations for the use of SpeakEasyApp. By accessing this app, you accept these terms and conditions in full. Do not continue to use SpeakEasyApp if you do not accept all of the terms and conditions stated on this page.</p>
            </div>
          </IonAccordion>
          <IonAccordion value="privacy">
            <IonItem slot="header" color="light">
              <IonLabel>Privacy Policy</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>We are committed to protecting your privacy. Our privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our app.</p>
            </div>
          </IonAccordion>
          <IonAccordion value="eligibility">
            <IonItem slot="header" color="light">
              <IonLabel>User Eligibility</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>Our services are available to users who are at least 13 years old. By using our services, you represent and warrant that you are at least 13 years old and have the right, authority, and capacity to enter into this agreement.</p>
            </div>
          </IonAccordion>
          <IonAccordion value="faq">
            <IonItem slot="header" color="light">
              <IonLabel>Frequently Asked Questions</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              {faqList.map((faq, index) => (
                <div key={index}>
                  <p><strong>{faq.question}</strong></p>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <div className="animation-container">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
