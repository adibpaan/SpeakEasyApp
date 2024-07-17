import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonProgressBar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Progress & Achievements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Progress</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Grammar</IonLabel>
                <IonProgressBar value={0.7}></IonProgressBar>
              </IonItem>
              <IonItem>
                <IonLabel>Parts of Speech</IonLabel>
                <IonProgressBar value={0.5}></IonProgressBar>
              </IonItem>
              <IonItem>
                <IonLabel>Conversation</IonLabel>
                <IonProgressBar value={0.6}></IonProgressBar>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Achievements</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Grammar Master</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Conversationalist</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Presentation Pro</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
