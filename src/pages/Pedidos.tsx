import { Cabecera } from "@/components/Cabecera";
import { IonContent } from "@ionic/react";
import { ProductoCarta } from "@/interfaces/Producto";
import { items } from "@/mocks/items.json";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import ChooseQuantity from "@/components/actions/ChooseQuantity";

export default function Pedidos() {
  return (
    <IonContent>
      <div className="main-content">
        <Cabecera titulo='Pedidos'></Cabecera>

        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead>Imagen</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: ProductoCarta) => (
              <TableRow key={item.id}>
                <TableCell><img src={item.imagen} alt="" className="object-cover h-auto w-[96px] rounded-md" /></TableCell>
                <TableCell className="font-medium">{item.nombre}</TableCell>
                <TableCell className="text-center">
                  <ChooseQuantity quantity={item.cantidad} />
                </TableCell>
                <TableCell className="text-right precio">
                  {item.precio}€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </IonContent>
  );
}