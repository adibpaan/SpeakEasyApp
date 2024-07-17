import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonButtons, IonBackButton, IonModal, IonButton, IonImg } from '@ionic/react';
import { bookOutline, chatbubblesOutline, documentTextOutline, globeOutline, personOutline, happyOutline, buildOutline, carOutline } from 'ionicons/icons';
import './Speech.css';

// Import the image from the assets folder
import businessChatImage from '../../assets/business-chat.svg';
import nounImage from '../../assets/noun.svg';
import verbImage from '../../assets/verb.svg';
import adjectiveImage from '../../assets/adjective.svg';
import adverbImage from '../../assets/adverb.svg';
import prepositionImage from '../../assets/preposition.svg';
import conjunctionImage from '../../assets/conjunction.svg';
import interjectionImage from '../../assets/interjection.svg';

// Import the note files
import nounNote from '../../assets/noun-note.pdf';
import pronounNote from '../../assets/pronoun-note.pdf';
import verbNote from '../../assets/verb-note.pdf';
import adjectiveNote from '../../assets/adjective-note.pdf';
import adverbNote from '../../assets/adverb-note.pdf';
import prepositionNote from '../../assets/preposition-note.pdf';
import conjunctionNote from '../../assets/conjunction-note.pdf';
import interjectionNote from '../../assets/interjection-note.pdf';

const partsOfSpeech = [
  { title: 'Noun', icon: personOutline, description: 'A noun is a word that names a person, place, thing, or idea.', example: 'dog, city, happiness.', image: nounImage, video: 'https://www.youtube.com/watch?v=6h3V-Tm_tNs', note: nounNote },
  { title: 'Pronoun', icon: happyOutline, description: 'A pronoun is a word that takes the place of a noun.', example: 'he, she, it.', image: businessChatImage, video: 'https://www.youtube.com/watch?v=acqD-uZGMWc', note: pronounNote },
  { title: 'Verb', icon: buildOutline, description: 'A verb is a word that expresses action or a state of being.', example: 'run, jump, be.', image: verbImage, video: 'https://www.youtube.com/watch?v=LpYfzftVDXA', note: verbNote },
  { title: 'Adjective', icon: bookOutline, description: 'An adjective is a word that modifies a noun or pronoun.', example: 'quick, blue, tall.', image: adjectiveImage, video: 'https://www.youtube.com/watch?v=LiYxv0vudmc', note: adjectiveNote },
  { title: 'Adverb', icon: chatbubblesOutline, description: 'An adverb is a word that modifies a verb, adjective, or other adverb.', example: 'quickly, very, well.', image: adverbImage, video: 'https://www.youtube.com/watch?v=94aFcx6oliY', note: adverbNote },
  { title: 'Preposition', icon: documentTextOutline, description: 'A preposition is a word that shows the relationship between a noun or pronoun and another word.', example: 'in, on, at.', image: prepositionImage, video: 'https://www.youtube.com/watch?v=3DFRvYGBmaw', note: prepositionNote },
  { title: 'Conjunction', icon: globeOutline, description: 'A conjunction is a word that joins words, phrases, or clauses.', example: 'and, but, or.', image: conjunctionImage, video: 'https://www.youtube.com/watch?v=3qbfcHiUrcI', note: conjunctionNote },
  { title: 'Interjection', icon: carOutline, description: 'An interjection is a word or phrase that expresses emotion or exclamation.', example: 'oh!, wow!, ouch!', image: interjectionImage, video: 'https://www.youtube.com/watch?v=OWCwCInU4f4', note: interjectionNote },
];

const Speech: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCardClick = (title: string) => {
    setSelectedPart(title);
    setShowModal(true);
  };

  const getSelectedPart = () => {
    return partsOfSpeech.find(part => part.title === selectedPart);
  };

  const handleDownload = (note: string) => {
    const link = document.createElement('a');
    link.href = note;
    link.download = `${selectedPart}-note.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Parts of Speech</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          {partsOfSpeech.map((part, index) => (
            index % 2 === 0 ? (
              <IonRow key={index}>
                <IonCol size="6">
                  <IonCard className="hoverable-card" onClick={() => handleCardClick(part.title)}>
                    <IonCardHeader className="card-header">
                      <IonIcon icon={part.icon} className="icon" />
                      <IonCardTitle className="card-title">
                        {part.title}
                      </IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
                {index + 1 < partsOfSpeech.length && (
                  <IonCol size="6">
                    <IonCard className="hoverable-card" onClick={() => handleCardClick(partsOfSpeech[index + 1].title)}>
                      <IonCardHeader className="card-header">
                        <IonIcon icon={partsOfSpeech[index + 1].icon} className="icon" />
                        <IonCardTitle className="card-title">
                          {partsOfSpeech[index + 1].title}
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                )}
              </IonRow>
            ) : null
          ))}
        </IonGrid>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedPart}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {getSelectedPart() && (
              <div className="modal-content">
                <IonImg src={getSelectedPart()?.image} alt={selectedPart || ''} />
                <p>{getSelectedPart()?.description}</p>
                <p><strong>Example:</strong> {getSelectedPart()?.example}</p>
                <IonButton expand="block" onClick={() => window.open(getSelectedPart()?.video, '_blank')}>Watch Video</IonButton>
                <IonButton expand="block" color="secondary" onClick={() => handleDownload(getSelectedPart()?.note || '')}>Download Note</IonButton>
              </div>
            )}
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Speech;
