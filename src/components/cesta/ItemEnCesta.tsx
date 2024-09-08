import { ProductoCarta } from "@/interfaces/Producto";

export function ItemEnCesta({ item }: { item: ProductoCarta }) {
  return (
    
        <div className="flex flex-row items-center justify-between">
            <h4 className="w-44 text-xs font-bold text-gray-900 ">
              {item.nombre}
            </h4>
            <div className="w-20 flex items-center text-gray-900 ">
              
            </div>
            <p className="float-right text-gray-900 ">
              {item.precio}€
            </p>
        </div>
  );
}
