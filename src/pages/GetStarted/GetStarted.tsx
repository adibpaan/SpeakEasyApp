import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from './lottie-animation.json'; // Download the JSON and place it in the same directory
import './GetStarted.css'; // Create this file for custom styles

const GetStarted: React.FC = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/tab1'); // Change this to the main page of your app
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to SpeakEasyApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="lottie-container">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <IonText className="ion-text-center">
          <h2>Improve Your Communication Skills</h2>
          <p>Welcome to SpeakEasyApp! This app is designed to help you enhance your communication skills through interactive lessons, quizzes, and practical tips.</p>
        </IonText>
        <IonButton expand="block" onClick={navigateToHome}>
          Get Started
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GetStarted;
