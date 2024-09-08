import { IonContent, IonSearchbar } from "@ionic/react";
import { Cabecera } from "@/components/Cabecera";
import { Producto } from "@/components/Producto";
import { items } from "@/mocks/items.json";
import { ProductoCarta } from "@/interfaces/Producto";

export default function Carta() {
  return (
    <>
      <IonContent className="content-margin">
        <Cabecera titulo="Carta">
          <IonSearchbar className="p-0 min-h-10" />
        </Cabecera>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-3">
          {items.map((item: ProductoCarta) => {
            return <Producto key={item.id} producto={item} />;
          })}
        </section>
      </IonContent>
    </>
  );
}
