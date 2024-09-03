import { Link } from "react-router-dom";
import { Cabecera } from "@/components/Cabecera.tsx";
import { ItemEnCesta } from "@/components/cesta/ItemEnCesta";
import { items } from "../mocks/items.json";
import { IonContent } from "@ionic/react";
import { ProductoCarta } from "@/interfaces/Producto";

export default function Cesta() {
  return (
    <IonContent className="content-margin">
      <Cabecera titulo="Cesta"></Cabecera>

      <div className="m-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {items.map((item: ProductoCarta) => (
          <Link
            to="#"
            key={item.id}
            className="block w-full px-2 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 focus:outline-none"
          >
            <ItemEnCesta item={item} />
          </Link>
        ))}
      </div>
    </IonContent>
  );
}
