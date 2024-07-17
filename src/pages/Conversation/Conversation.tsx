import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonAlert, IonModal } from '@ionic/react';
import { micOutline, stopOutline, playOutline } from 'ionicons/icons';
import { ReactMic } from 'react-mic';
import { useHistory } from 'react-router-dom';
import './Conversation.css';

import question1 from './question1.mp3';
import question2 from './question2.mp3';
import question3 from './question3.mp3';
import question4 from './question4.mp3';
import question5 from './question5.mp3';
import question6 from './question6.mp3';
import question7 from './question7.mp3';
import question8 from './question8.mp3';
import question9 from './question9.mp3';
import question10 from './question10.mp3';

const Conversation: React.FC = () => {
  const [record, setRecord] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCompletionAlert, setShowCompletionAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [conversationType, setConversationType] = useState<'small' | 'basic'>('small');
  const history = useHistory();

  const smallTalkQuestions = [
    'How was your day?',
    'What are your hobbies?',
    'Tell me about your favorite book.',
    'Where do you like to travel?',
    'What are your future plans?'
  ];

  const basicTalkQuestions = [
    'What do you do for a living?',
    'Describe your family.',
    'What are your long-term goals?',
    'What is your biggest achievement?',
    'What are your core values?'
  ];

  const smallTalkAudioFiles = [
    question1,
    question2,
    question3,
    question4,
    question5
  ];

  const basicTalkAudioFiles = [
    question6,
    question7,
    question8,
    question9,
    question10
  ];

  const questions = conversationType === 'small' ? smallTalkQuestions : basicTalkQuestions;
  const audioFiles = conversationType === 'small' ? smallTalkAudioFiles : basicTalkAudioFiles;

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onStop = (recordedBlob: any) => {
    setRecordedBlob(recordedBlob.blob);
  };

  const playRecordedAudio = () => {
    if (recordedBlob) {
      const audioUrl = URL.createObjectURL(recordedBlob);
      const audio = new Audio(audioUrl);
      audio.play().catch(error => console.error('Error playing audio:', error));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setRecordedBlob(null); // Reset the recorded blob for the next question
    } else {
      setShowCompletionAlert(true);
    }
  };

  useEffect(() => {
    if (showModal) {
      const playQuestionAudio = () => {
        const audio = new Audio(audioFiles[currentQuestionIndex]);
        audio.play().catch(error => console.error('Error playing audio:', error));
      };

      playQuestionAudio();
    }
  }, [currentQuestionIndex, showModal]);

  const handleAlertDismiss = () => {
    setShowCompletionAlert(false);
    setShowModal(false); // Close the modal when the alert is dismissed
    history.push('/tab1');
  };

  const handlePracticeClick = (type: 'small' | 'basic') => {
    setConversationType(type);
    setShowModal(true);
    setCurrentQuestionIndex(0); // Reset to the first question
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Conversation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Small Talk</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Engage in casual conversation about various topics to break the ice and build rapport.</p>
                  <IonButton expand="block" onClick={() => handlePracticeClick('small')}>
                    Practice
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Basic Talk</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Move on to more meaningful conversations to learn more about the other person.</p>
                  <IonButton expand="block" onClick={() => handlePracticeClick('basic')}>
                    Practice
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Practice Conversation</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>{questions[currentQuestionIndex]}</p>
            <ReactMic
              record={record}
              className="sound-wave"
              onStop={onStop}
              strokeColor="#000000"
              backgroundColor="#FF4081"
            />
            <IonButton onClick={startRecording} disabled={record}>
              <IonIcon icon={micOutline} /> Start Recording
            </IonButton>
            <IonButton onClick={stopRecording} disabled={!record}>
              <IonIcon icon={stopOutline} /> Stop Recording
            </IonButton>
            <IonButton onClick={playRecordedAudio} disabled={!recordedBlob}>
              <IonIcon icon={playOutline} /> Play Recorded Audio
            </IonButton>
            <IonButton onClick={handleNextQuestion} disabled={!recordedBlob}>
              Next Question
            </IonButton>
          </IonContent>
        </IonModal>
        <IonAlert
          isOpen={showCompletionAlert}
          onDidDismiss={handleAlertDismiss}
          header={'Practice Complete'}
          message={'Congratulations! You have completed the practice. Click OK to return to the home page.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Conversation;
