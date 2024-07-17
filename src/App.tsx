import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, bookOutline, helpCircleOutline, informationCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Grammar from './pages/Grammar/Grammar';
import GetStarted from './pages/GetStarted/GetStarted'; 
import Importance from './pages/Importance/Importance';
import Profile from './pages/Profile/Profile';
import LanguageSettings from './pages/LanguageSettings/LanguageSettings';
import Speech from './pages/Speech/Speech';
import Introduction from './pages/Introduction/Introduction';
import Conversation from './pages/Conversation/Conversation';
import Presentation from './pages/Presentation/Presentation';
import PracticePresentation from './pages/Presentation/PracticePresentation';
import Quizzes from './pages/Quizzes/Quizzes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/grammar" component={Grammar} exact={true} />
          <Route path="/importance" component={Importance} exact={true} />
          <Route path="/speech" component={Speech} exact={true} />
          <Route path="/introduction" component={Introduction} exact={true} />
          <Route path="/conversation" component={Conversation} exact={true} />
          <Route path="/presentation" component={Presentation} exact={true} />
          <Route path="/practice-presentation" component={PracticePresentation} exact={true} />
          <Route path="/quizzes" component={Quizzes} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/language-settings" component={LanguageSettings} exact={true} />
          <Route path="/get-started" component={GetStarted} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/get-started" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lesson" href="/lesson">
            <IonIcon aria-hidden="true" icon={bookOutline} />
            <IonLabel>Lesson</IonLabel>
          </IonTabButton>
          <IonTabButton tab="quizzes" href="/quizzes">
            <IonIcon aria-hidden="true" icon={helpCircleOutline} />
            <IonLabel>Quiz</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={informationCircleOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
