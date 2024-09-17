import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import Carta from '@/pages/Carta.tsx';
import Cesta from '@/pages/Cesta.tsx'; 
import Pedidos from '@/pages/Pedidos.tsx';
import { Route } from 'react-router-dom';
import CestaIcon from './icons/CestaIcon';
import PedidosIcon from './icons/PedidosIcon';
import CartaIcon from './icons/CartaIcon';
import ConfIcon from './icons/ConfIcon';

export function BottomMenu() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/carta" component={Carta} />
        <Route path="/cesta" component={Cesta} />
        <Route path="/pedidos" component={Pedidos} />
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
        <IonTabButton tab="carta" href="/carta">
          <CartaIcon />
          <IonLabel class='text-xs'>Carta</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cesta" href="/cesta">
          <CestaIcon />
          <IonLabel class='text-xs'>Cesta</IonLabel>
        </IonTabButton>
        <IonTabButton tab="pedidos" href="/pedidos">
          <PedidosIcon />
          <IonLabel class='text-xs'>Pedidos</IonLabel>
        </IonTabButton>
        <IonTabButton tab="config" href="/">
          <ConfIcon /> 
          <IonLabel class='text-xs'>Configuracion</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
