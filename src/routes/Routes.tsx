import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Carta from '@/pages/Carta';
import Cesta from '@/pages/Cesta';
import Pedidos from '@/pages/Pedidos';

export default function Routes() {
  return (
    <IonRouterOutlet id="main-content">
      <Route path="/" component={Home} exact />
      <Route path="/carta" component={Carta} exact />
      <Route path="/cesta" component={Cesta} exact />
      <Route path="/pedidos" component={Pedidos} exact />
    </IonRouterOutlet>
  );
}
