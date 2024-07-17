import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Presentation.css';

const Presentation: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const history = useHistory();

  const toggleCardContent = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const navigateToPractice = () => {
    history.push('/practice-presentation');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Presentation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader onClick={() => toggleCardContent(0)}>
                  <IonCardTitle>Managing Your Presentation</IonCardTitle>
                </IonCardHeader>
                {activeCard === 0 && (
                  <IonCardContent>
                    <p>Learn how to manage your presentation effectively to engage your audience and deliver your message clearly.</p>
                    <IonButton expand="block" fill="outline" href="https://www.youtube.com/watch?v=N5t3NTix1hw" target="_blank">
                      Watch Managing Presentation Tips Video
                    </IonButton>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader onClick={() => toggleCardContent(1)}>
                  <IonCardTitle>Presentation Tips</IonCardTitle>
                </IonCardHeader>
                {activeCard === 1 && (
                  <IonCardContent>
                    <p>Here are some tips to make your presentations more effective:</p>
                    <ul>
                      <li>Know your audience</li>
                      <li>Keep it simple and focused</li>
                      <li>Practice, practice, practice</li>
                      <li>Engage with your audience</li>
                      <li>Use visual aids effectively</li>
                    </ul>
                    <IonButton expand="block" fill="outline" href="https://www.youtube.com/watch?v=MnIPpUiTcRc" target="_blank">
                      Watch Presentation Tips Video
                    </IonButton>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader onClick={() => toggleCardContent(2)}>
                  <IonCardTitle>Guide</IonCardTitle>
                </IonCardHeader>
                {activeCard === 2 && (
                  <IonCardContent>
                    <p>Follow these steps to prepare your presentation:</p>
                    <ol>
                      <li>Start with a strong opening</li>
                      <li>Outline your main points</li>
                      <li>Include supporting details</li>
                      <li>End with a strong conclusion</li>
                      <li>Prepare for questions</li>
                    </ol>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader onClick={() => toggleCardContent(3)}>
                  <IonCardTitle>Sample Presentation</IonCardTitle>
                </IonCardHeader>
                {activeCard === 3 && (
                  <IonCardContent>
                    <p>Here is a sample presentation to help you get started:</p>
                    <iframe
                      width="100%"
                      height="200"
                      src="https://www.youtube.com/embed/P2LwuF7zn9c"
                      title="Sample Presentation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <iframe
                      width="100%"
                      height="200"
                      src="https://www.youtube.com/embed/aGEFtRwPhE4"
                      title="Sample Presentation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
            <IonCol size="12">
              <IonButton expand="block" onClick={navigateToPractice}>Practice</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Presentation;
