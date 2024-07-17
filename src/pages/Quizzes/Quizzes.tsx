import React, { useState, useEffect, useRef } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonModal, IonLabel, IonRadioGroup, IonRadio,
  IonItem, IonAlert, useIonViewWillLeave, useIonViewWillEnter
} from '@ionic/react';
import './Quizzes.css';
import main_audio from './main.mp3';

const categories = [
  'Grammar',
  'Parts of Speech',
  'Introduce Yourself',
  'Conversation',
  'Presentation'
] as const;

type Category = typeof categories[number];

const questions: Record<Category, { question: string; options: string[]; answer: string }[]> = {
  Grammar: [
    { question: 'What is the past tense of "run"?', options: ['Ran', 'Run', 'Runned', 'Running'], answer: 'Ran' },
    { question: 'Which is a synonym of "happy"?', options: ['Sad', 'Elated', 'Angry', 'Tired'], answer: 'Elated' },
    { question: 'Which is a verb?', options: ['Run', 'Blue', 'Quickly', 'And'], answer: 'Run' },
    { question: 'Which is an adjective?', options: ['Happy', 'Run', 'Quickly', 'But'], answer: 'Happy' },
    { question: 'Which is a noun?', options: ['Tree', 'Quickly', 'Run', 'Happy'], answer: 'Tree' }
  ],
  'Parts of Speech': [
    { question: 'What part of speech is "quickly"?', options: ['Noun', 'Verb', 'Adverb', 'Adjective'], answer: 'Adverb' },
    { question: 'What part of speech is "and"?', options: ['Noun', 'Verb', 'Conjunction', 'Adjective'], answer: 'Conjunction' },
    { question: 'What part of speech is "beautiful"?', options: ['Noun', 'Verb', 'Adverb', 'Adjective'], answer: 'Adjective' },
    { question: 'What part of speech is "swim"?', options: ['Noun', 'Verb', 'Adverb', 'Adjective'], answer: 'Verb' },
    { question: 'What part of speech is "happiness"?', options: ['Noun', 'Verb', 'Adverb', 'Adjective'], answer: 'Noun' }
  ],
  'Introduce Yourself': [
    { question: 'What is the best way to introduce yourself?', options: ['Stay silent', 'Say your name and a bit about yourself', 'Ignore the person', 'Ask a question'], answer: 'Say your name and a bit about yourself' },
    { question: 'What should you include in an introduction?', options: ['Your name', 'Your job or role', 'A bit about your background', 'All of the above'], answer: 'All of the above' },
    { question: 'When is it appropriate to introduce yourself?', options: ['At the beginning of a conversation', 'In the middle of a conversation', 'At the end of a conversation', 'Never'], answer: 'At the beginning of a conversation' },
    { question: 'Why is it important to introduce yourself?', options: ['To build rapport', 'To create a positive impression', 'To initiate a conversation', 'All of the above'], answer: 'All of the above' },
    { question: 'What should you do after introducing yourself?', options: ['Stay silent', 'Walk away', 'Ask a question or continue the conversation', 'Ignore the person'], answer: 'Ask a question or continue the conversation' }
  ],
  Conversation: [
    { question: 'What is an open-ended question?', options: ['A question that can be answered with "yes" or "no"', 'A question that requires a detailed answer', 'A rhetorical question', 'A question with multiple choice answers'], answer: 'A question that requires a detailed answer' },
    { question: 'What should you do to keep a conversation going?', options: ['Ask follow-up questions', 'Change the subject frequently', 'Talk about yourself only', 'Stay silent'], answer: 'Ask follow-up questions' },
    { question: 'What is active listening?', options: ['Nodding occasionally', 'Interrupting the speaker', 'Focusing entirely on the speaker and responding appropriately', 'Thinking about your response while the other person is speaking'], answer: 'Focusing entirely on the speaker and responding appropriately' },
    { question: 'Why is body language important in a conversation?', options: ['It helps convey your interest and engagement', 'It distracts the speaker', 'It is not important', 'It shows you are not listening'], answer: 'It helps convey your interest and engagement' },
    { question: 'What is a good way to end a conversation?', options: ['Walk away abruptly', 'Summarize the main points and express appreciation', 'Stay silent', 'Change the subject'], answer: 'Summarize the main points and express appreciation' }
  ],
  Presentation: [
    { question: 'What is the first step in preparing a presentation?', options: ['Writing the conclusion', 'Choosing a topic', 'Designing the slides', 'Practicing delivery'], answer: 'Choosing a topic' },
    { question: 'How should you start your presentation?', options: ['With a joke', 'With a strong opening statement', 'With an apology', 'By reading your slides'], answer: 'With a strong opening statement' },
    { question: 'What is important to keep in mind when designing slides?', options: ['Use a lot of text', 'Include relevant images and bullet points', 'Use multiple fonts and colors', 'Read directly from the slides'], answer: 'Include relevant images and bullet points' },
    { question: 'How can you engage your audience during a presentation?', options: ['Ask questions', 'Use interactive elements', 'Maintain eye contact', 'All of the above'], answer: 'All of the above' },
    { question: 'What should you do if you forget a point during your presentation?', options: ['Panic', 'Apologize and move on', 'Refer to your notes or slides', 'End the presentation'], answer: 'Refer to your notes or slides' }
  ]
};

const Quizzes: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showCompletionAlert, setShowCompletionAlert] = useState(false);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [unlockedCategories, setUnlockedCategories] = useState<Category[]>(['Grammar']);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(main_audio);
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  useIonViewWillEnter(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  });

  useIonViewWillLeave(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  });

  const toggleCardContent = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleAnswerSubmit = () => {
    if (currentCategory && selectedAnswer === questions[currentCategory][currentQuestionIndex].answer) {
      setScores({ ...scores, [currentCategory]: (scores[currentCategory] || 0) + 1 });
    }

    if (currentCategory && currentQuestionIndex < questions[currentCategory].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowCompletionAlert(true);
      setUnlockedCategories([...unlockedCategories, categories[categories.indexOf(currentCategory!) + 1]]);
    }
    setSelectedAnswer(null);
  };

  const startQuiz = (category: Category) => {
    setCurrentCategory(category);
    setCurrentQuestionIndex(0);
    setScores({ ...scores, [category]: 0 });  // Reset the score for the category
    setShowModal(true);
  };

  const handleAlertDismiss = () => {
    setShowCompletionAlert(false);
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Quizzes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          {categories.map((category, index) => (
            <IonRow key={index}>
              <IonCol size="12" size-md="6">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{category}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {unlockedCategories.includes(category) ? (
                      <IonButton expand="block" onClick={() => startQuiz(category)}>Start Quiz</IonButton>
                    ) : (
                      <IonButton expand="block" disabled>Locked</IonButton>
                    )}
                    <div className="score">Score: {scores[category] || 0}</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
        {currentCategory && (
          <IonModal isOpen={showModal}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Quiz: {currentCategory}</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Question {currentQuestionIndex + 1}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{questions[currentCategory][currentQuestionIndex]?.question}</p>
                  <IonRadioGroup value={selectedAnswer} onIonChange={e => setSelectedAnswer(e.detail.value)}>
                    {questions[currentCategory][currentQuestionIndex]?.options.map((option, idx) => (
                      <IonItem key={idx}>
                        <IonLabel>{option}</IonLabel>
                        <IonRadio slot="start" value={option} />
                      </IonItem>
                    ))}
                  </IonRadioGroup>
                  <IonButton expand="block" onClick={handleAnswerSubmit} disabled={!selectedAnswer}>Submit Answer</IonButton>
                </IonCardContent>
              </IonCard>
            </IonContent>
          </IonModal>
        )}
        <IonAlert
          isOpen={showCompletionAlert}
          onDidDismiss={handleAlertDismiss}
          header={'Quiz Complete'}
          message={`You have completed the ${currentCategory} quiz. Your score is ${scores[currentCategory!] || 0} out of 5.`}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Quizzes;
