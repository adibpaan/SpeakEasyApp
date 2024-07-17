import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { chatbubblesOutline, peopleOutline, globeOutline } from 'ionicons/icons';
import Lottie from 'lottie-react';
import animationData from './lottie-animation2.json';
import './Importance.css';

const Importance: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCardContent = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Why Communication is Important?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard onClick={() => toggleCardContent(0)} className="hoverable-card">
                <IonCardHeader>
                  <IonCardTitle><IonIcon icon={chatbubblesOutline} /> Effective Communication</IonCardTitle>
                </IonCardHeader>
                {activeCard === 0 && (
                  <IonCardContent>
                    Communication is the cornerstone of all relationships, be it personal or professional. It helps in expressing ideas, sharing thoughts, and conveying messages effectively.
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard onClick={() => toggleCardContent(1)} className="hoverable-card">
                <IonCardHeader>
                  <IonCardTitle><IonIcon icon={peopleOutline} /> Building Relationships</IonCardTitle>
                </IonCardHeader>
                {activeCard === 1 && (
                  <IonCardContent>
                    Good communication builds trust and understanding, leading to stronger relationships. Whether in families, workplaces, or communities, effective communication fosters collaboration and reduces conflicts.
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard onClick={() => toggleCardContent(2)} className="hoverable-card">
                <IonCardHeader>
                  <IonCardTitle><IonIcon icon={globeOutline} /> Global Connectivity</IonCardTitle>
                </IonCardHeader>
                {activeCard === 2 && (
                  <IonCardContent>
                    In our interconnected world, communication bridges cultural and geographical gaps. It allows us to connect with people across the globe, promoting diversity and inclusivity.
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <div className="importance-image">
          <Lottie animationData={animationData} loop={true} />
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Importance;
