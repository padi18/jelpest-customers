import { IonContent, IonSearchbar } from "@ionic/react";
import { Cabecera } from "@/components/Cabecera";
import { Producto } from "@/components/Producto";
import { items } from "@/mocks/items.json";
import { ProductoCarta } from "@/interfaces/Producto";

export default function Carta() {
  return (
    <>
      <IonContent>
        <div className="main-content">
          <section>
            <Cabecera titulo="Carta"></Cabecera>
            <IonSearchbar className="min-h-10 p-0" />
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item: ProductoCarta) => {
              return <Producto key={item.id} producto={item} />;
            })}
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item: ProductoCarta) => {
              return <Producto key={item.id} producto={item} />;
            })}
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item: ProductoCarta) => {
              return <Producto key={item.id} producto={item} />;
            })}
          </section>
        </div>
      </IonContent>
      
    </>
  );
}
