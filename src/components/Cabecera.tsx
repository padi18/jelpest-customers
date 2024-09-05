import React from 'react';

interface CabeceraProps {
  titulo: string;
  children?: React.ReactNode;
}

export function Cabecera({ titulo, children }: CabeceraProps) {
  return (
    <section className="flex flex-row justify-between items-center gap-4 mx-3 mt-3 mb-1">
      <h3 className="font-bold mt-1 mb-0">
        {titulo}
      </h3>
      {children ? children : null}
    </section>
  );
}