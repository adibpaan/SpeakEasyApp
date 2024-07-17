import React, { useState, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Presentation.css';

const presentationTitles = [
  'Introducing Your Company',
  'Project Update',
  'Marketing Strategy',
  'Financial Report',
  'Product Launch',
  'Training Session',
  'Customer Feedback Analysis',
  'Annual Review',
  'Sales Pitch',
  'Event Planning'
];

const PracticePresentation: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | undefined>();
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks: BlobPart[] = [];

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current!.srcObject = stream;
    videoRef.current!.play();

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setRecordedBlob(url);
      videoRef.current!.srcObject = null;
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleSelectTitle = (title: string) => {
    setSelectedTitle(title);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/presentation" />
          </IonButtons>
          <IonTitle>Practice Presentation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonLabel>Select a title for your practice presentation:</IonLabel>
              <IonSelect placeholder="Select Title" onIonChange={(e) => handleSelectTitle(e.detail.value)}>
                {presentationTitles.map((title, index) => (
                  <IonSelectOption key={index} value={title}>{title}</IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" onClick={startRecording} disabled={!selectedTitle || recording}>Start Recording</IonButton>
              <IonButton expand="block" onClick={stopRecording} disabled={!recording}>Stop Recording</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <video ref={videoRef} width="100%" controls></video>
            </IonCol>
          </IonRow>
          {recordedBlob && (
            <IonRow>
              <IonCol size="12">
                <h2>Playback - {selectedTitle}</h2>
                <video src={recordedBlob} width="100%" controls></video>
                <IonButton expand="block" href={recordedBlob} download={`presentation-${selectedTitle}.webm`}>Download Video</IonButton>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PracticePresentation;
