import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonBackButton,
  IonAlert,
  IonButtons,
  IonModal,
  IonImg,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import './Introduction.css';

import s1Image from '../../assets/slider1.svg';
import s2Image from '../../assets/slider2.svg';
import s3Image from '../../assets/slider3.svg';
import s4Image from '../../assets/slider4.svg';
import s5Image from '../../assets/slider5.svg';

const tips = [
  {
    title: 'Smile and make eye contact',
    description: 'A smile and eye contact can make a positive first impression.',
    image: s1Image,
  },
  {
    title: 'Speak clearly and confidently',
    description: 'Confidence and clarity in your speech can convey trustworthiness.',
    image: s2Image,
  },
  {
    title: 'Keep it short and to the point',
    description: 'Brief and concise introductions are often more memorable.',
    image: s3Image,
  },
  {
    title: 'Mention your name and a few interesting facts about yourself',
    description: 'Sharing interesting facts can spark conversation.',
    image: s4Image,
  },
  {
    title: 'Ask questions to engage the other person',
    description: 'Asking questions shows interest and can lead to meaningful interactions.',
    image: s5Image,
  },
];

const Introduction: React.FC = () => {
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleIntroduction = () => {
    if (name.trim() === '') {
      setShowAlert(true);
    } else {
      setIntroduction(`Hi, my name is ${name}. It's a pleasure to meet you!`);
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    setName(e.detail.value!);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Introduction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader onClick={toggleDescription}>
                  <IonCardTitle>Why Introductions Matter</IonCardTitle>
                </IonCardHeader>
                {showDescription && (
                  <IonCardContent>
                    Introducing yourself is the first step to forming new connections and building relationships. A good introduction can leave a lasting impression and set the tone for future interactions.
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle onClick={() => setShowModal(true)}>Tips for a Great Introduction</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Practice Your Introduction</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonInput
                    value={name}
                    placeholder="Enter your name"
                    onIonChange={handleInputChange}
                    clearInput
                  />
                  <IonButton expand="block" onClick={handleIntroduction}>Generate Introduction</IonButton>
                  {introduction && <p className="introduction-result">{introduction}</p>}
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Example Phrases</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Here are some example phrases you can use:</p>
                  <ul>
                    <li>Hello, I'm [Your Name]. Nice to meet you!</li>
                    <li>Hi, my name is [Your Name]. I work as a [Your Job].</li>
                    <li>Hey there, I'm [Your Name]. I'm passionate about [Your Interest].</li>
                    <li>Good day, I'm [Your Name]. I'm excited to be here and learn more about [Event/Place].</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Input Required'}
          message={'Please enter your name before generating an introduction.'}
          buttons={['OK']}
        />
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tips for a Great Introduction</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <Swiper>
              {tips.map((tip, index) => (
                <SwiperSlide key={index}>
                  <IonCard>
                    <IonImg src={tip.image} alt={`Tip ${index + 1}`} />
                    <IonCardHeader>
                      <IonCardTitle>{tip.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{tip.description}</IonCardContent>
                  </IonCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Introduction;
