import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './Grammar.css';
import walkingSvg from '../../assets/walking.svg'; 
import rainSvg from '../../assets/rain.svg'; 
import timeSvg from '../../assets/time.svg'; 



const Grammar: React.FC = () => {
  const [expandedTense, setExpandedTense] = useState<string | null>(null);

  const toggleTense = (tense: string) => {
    setExpandedTense(expandedTense === tense ? null : tense);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Grammar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="hoverable-card" onClick={() => toggleTense('present')}>
          <IonCardHeader>
            <IonCardTitle>
              Present Tense
              <IonIcon icon={expandedTense === 'present' ? chevronUpOutline : chevronDownOutline} />
            </IonCardTitle>
          </IonCardHeader>
          {expandedTense === 'present' && (
            <IonCardContent>
              <p>Present tense is used to describe actions that are currently happening or are ongoing.</p>
              <ul>
                <li><strong>Simple Present:</strong> I walk to school every day.</li>
                <li><strong>Present Continuous:</strong> I am walking to school right now.</li>
                <li><strong>Present Perfect:</strong> I have walked to school many times.</li>
                <li><strong>Present Perfect Continuous:</strong> I have been walking to school for 10 minutes.</li>
              </ul>
              <img src={walkingSvg} alt="Present Tense" className="grammar-image" />
            </IonCardContent>
          )}
        </IonCard>

        <IonCard className="hoverable-card" onClick={() => toggleTense('past')}>
          <IonCardHeader>
            <IonCardTitle>
              Past Tense
              <IonIcon icon={expandedTense === 'past' ? chevronUpOutline : chevronDownOutline} />
            </IonCardTitle>
          </IonCardHeader>
          {expandedTense === 'past' && (
            <IonCardContent>
              <p>Past tense is used to describe actions that have already happened.</p>
              <ul>
                <li><strong>Simple Past:</strong> I walked to school yesterday.</li>
                <li><strong>Past Continuous:</strong> I was walking to school when it started to rain.</li>
                <li><strong>Past Perfect:</strong> I had walked to school before the bell rang.</li>
                <li><strong>Past Perfect Continuous:</strong> I had been walking to school for 10 minutes when it started to rain.</li>
              </ul>
              <img src={rainSvg} alt="Past Tense" className="grammar-image" />
            </IonCardContent>
          )}
        </IonCard>

        <IonCard className="hoverable-card" onClick={() => toggleTense('future')}>
          <IonCardHeader>
            <IonCardTitle>
              Future Tense
              <IonIcon icon={expandedTense === 'future' ? chevronUpOutline : chevronDownOutline} />
            </IonCardTitle>
          </IonCardHeader>
          {expandedTense === 'future' && (
            <IonCardContent>
              <p>Future tense is used to describe actions that will happen.</p>
              <ul>
                <li><strong>Simple Future:</strong> I will walk to school tomorrow.</li>
                <li><strong>Future Continuous:</strong> I will be walking to school at this time tomorrow.</li>
                <li><strong>Future Perfect:</strong> I will have walked to school by this time tomorrow.</li>
                <li><strong>Future Perfect Continuous:</strong> I will have been walking to school for 10 minutes by the time you call.</li>
              </ul>
              <img src={timeSvg} alt="Future Tense" className="grammar-image" />
            </IonCardContent>
          )}
        </IonCard>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/henIVlCPVIY?start=1732"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Grammar;
