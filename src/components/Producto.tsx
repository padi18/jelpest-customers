import { ProductoCarta } from "@/interfaces/Producto";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import ChooseQuantity from "./actions/ChooseQuantity";
import CestaIcon from "./icons/CestaIcon";

export function Producto({ producto }: { producto: ProductoCarta }) {
  return (
    <Card className="flex flex-row">
      <img src={producto.imagen} alt="" className="m-3 object-cover h-auto w-[96px] rounded-md" />
      <CardContent className="flex flex-col gap-3 w-full p-3">
        <section className="flex justify-between items-center">
          <CardTitle className="my-auto">{producto.nombre}</CardTitle>
          <p className="precio">{producto.precio}€</p>
        </section>
        <section>
          <p>{producto.descripcion}</p>
        </section>
        <section className="flex justify-between items-center">
          <ChooseQuantity quantity={1} />
          <Button>
            <CestaIcon />
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}