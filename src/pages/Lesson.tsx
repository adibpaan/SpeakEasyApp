import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { chatbubblesOutline, bookOutline, peopleOutline, micOutline, podiumOutline, helpCircleOutline } from 'ionicons/icons';
import './Lesson.css';

const Lesson: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lesson</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={chatbubblesOutline} /> Why Communication is Important?
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Learn the importance of effective communication.
                  <IonButton expand="block" routerLink="/importance">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={bookOutline} /> Grammar
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Master grammar and improve your language skills.
                  <IonButton expand="block" routerLink="/grammar">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={peopleOutline} /> Parts of Speech
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Understand and use parts of speech effectively.
                  <IonButton expand="block" routerLink="/speech">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={micOutline} /> Introduction
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Learn how to introduce yourself properly.
                  <IonButton expand="block" routerLink="/introduction">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={chatbubblesOutline} /> Conversation
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Enhance your conversational skills.
                  <IonButton expand="block" routerLink="/conversation">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={podiumOutline} /> Presentation
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Improve your presentation skills.
                  <IonButton expand="block" routerLink="/presentation">Learn More</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Lesson;
