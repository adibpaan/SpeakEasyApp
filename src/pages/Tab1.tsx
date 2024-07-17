import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { chatbubblesOutline, bookOutline, peopleOutline, micOutline, podiumOutline, helpCircleOutline, chevronForwardOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SpeakEasyApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Swiper>
          <SwiperSlide>
            <IonCard>
              <img src="src/assets/speak.png" alt="SpeakEasyApp Slide 1" className="slider-image" />
              <IonCardHeader>
                <IonCardTitle>Welcome to SpeakEasyApp</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Learn and master the art of effective communication with our comprehensive lessons.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <img src="src/assets/lesson.png" alt="SpeakEasyApp Slide 2" className="slider-image" />
              <IonCardHeader>
                <IonCardTitle>Interactive Lessons</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Our interactive lessons are designed to keep you engaged and improve your language skills.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <img src="src/assets/quiz.png" alt="SpeakEasyApp Slide 3" className="slider-image" />
              <IonCardHeader>
                <IonCardTitle>Practice Quizzes</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Test your knowledge with our interactive quizzes and track your progress.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
        </Swiper>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2 className="custom-head2">Lessons</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/importance">
                <IonIcon icon={chatbubblesOutline} slot="start" />
                <IonLabel>Why Communication is Important?</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/grammar">
                <IonIcon icon={bookOutline} slot="start" />
                <IonLabel>Grammar</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/speech">
                <IonIcon icon={peopleOutline} slot="start" />
                <IonLabel>Parts of Speech</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/introduction">
                <IonIcon icon={micOutline} slot="start" />
                <IonLabel>Introduction</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/conversation">
                <IonIcon icon={chatbubblesOutline} slot="start" />
                <IonLabel>Conversation</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonItem button detail={false} lines="none" className="lesson-item" routerLink="/presentation">
                <IonIcon icon={podiumOutline} slot="start" />
                <IonLabel>Presentation</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <h2 className="custom-head2">Quizzes</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="card-hover">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonIcon icon={helpCircleOutline} /> Quizzes
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Test your knowledge with interactive quizzes.
                  <IonButton expand="block" routerLink="/quizzes">Start Quiz</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
