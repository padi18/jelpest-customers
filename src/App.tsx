import { IonApp, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from './routes/Routes';
import { BottomMenu } from './components/BottomMenu';
import './App.css'
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonContent>
          <Routes />
        </IonContent>
        <BottomMenu />
      </IonReactRouter>
    </IonApp>
  )
}

export default App
