import { Cabecera } from "@/components/Cabecera";
import { IonContent } from "@ionic/react";

export default function Pedidos() {
  return (
    <IonContent>
      <div className="main-content">
        <Cabecera titulo='Pedidos'></Cabecera>
      </div>
    </IonContent>
  );
}