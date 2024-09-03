import React from 'react';

interface CabeceraProps {
  titulo: string;
  children?: React.ReactNode;
}

export function Cabecera({ titulo, children }: CabeceraProps) {
  return (
    <section className="flex flex-row justify-between items-center gap-4 m-3">
      <h3 className="font-bold my-2">
        {titulo}
      </h3>
      {children ? children : null}
    </section>
  );
}