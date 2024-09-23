import { Cabecera } from "@/components/Cabecera.tsx";
import { items } from "../mocks/items.json";
import { IonContent } from "@ionic/react";
import { ProductoCarta } from "@/interfaces/Producto";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import ChooseQuantity from "@/components/actions/ChooseQuantity";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, X } from "lucide-react";

export default function Cesta() {
  return (
    <IonContent>
      <div className="main-content">
        <Cabecera titulo="Cesta"></Cabecera>

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
                <TableCell><img src={item.imagen} alt="" className="object-cover h-auto w-[60px] rounded-md" /></TableCell>
                <TableCell className="text-xs">{item.nombre}</TableCell>
                <TableCell>
                  <ChooseQuantity quantity={item.cantidad} />
                </TableCell>
                <TableCell className="text-right">
                  {item.precio}€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-bold text-lg">15,98€</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

      </div>

      <section className="flex justify-evenly fixed bottom-0 w-full py-4">
        <Button className="bg-destructive flex flex-row items-center justify-evenly gap-2 h-[45px] w-1/3 hover:bg-destructive/80">
          <span className="text-lg text-white">
            BORRAR
          </span>
          <X className="h-6 w-6" />
        </Button>
        <Button className="bg-primary flex flex-row items-center justify-evenly gap-2 h-[45px] w-1/3 hover:bg-primary/80">
          <span className="text-lg text-white">
            PEDIR
          </span>
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </section>

    </IonContent>
  );
}
