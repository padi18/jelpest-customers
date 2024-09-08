import { Cabecera } from "@/components/Cabecera";
import { Input } from "@/components/ui/input";
import {
  IonContent,
  IonButton,
} from "@ionic/react";

export default function Home() {

  return (
    <IonContent>
      <div className="main-content">
        <Cabecera titulo="Inicio"></Cabecera>
        <Input placeholder="Nombre"></Input>
        <Input placeholder="Tarjeta"></Input>
      
        <IonButton expand="block" routerLink="/carta">
          Siguiente
        </IonButton>
      </div>
    </IonContent>
  );
}
