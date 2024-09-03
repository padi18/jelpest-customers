import { Link } from "react-router-dom";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonButtons } from '@ionic/react';

export function Header() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/carta">Carta</IonItem>
            <IonItem routerLink="/cesta">Cesta</IonItem>
            <IonItem routerLink="/pedidos">Pedidos</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                className="h-8 w-auto"
                src="https://static-local.s3.eu-west-2.amazonaws.com/media/logobuenonombre.png"
                alt=""
              />
            </Link>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}