import {
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
} from "@ionic/react";
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [tarjeta, setTarjeta] = useState("");

  return (
    <IonContent className="content-margin">
      <section className="flex flex-col justify-center gap-4 mb-4">
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Tarjeta</IonLabel>
          <IonInput
            value={tarjeta}
            onIonChange={(e) => setTarjeta(e.detail.value!)}
          />
        </IonItem>
      </section>

      <IonButton expand="block" routerLink="/carta">
        Siguiente
      </IonButton>
    </IonContent>
  );
}
