import React, { useState } from "react";

export default function ChooseQuantity(quantity: number) {
  const [quantityValue, setQuantityValue] = useState(quantity);

  function handleDecrement() {
    setQuantityValue(quantityValue == 1 ? 1 : quantityValue - 1);
  }

  function handleIncrement() {
    setQuantityValue(quantityValue == 20 ? 20 : quantityValue + 1);
  }

  return (
    <div className="flex items-center justify-between md:order-3 md:justify-end">
      <div className="flex items-center">
        <button type="button" onClick={handleDecrement} id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 ">
          <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter className="w-8 p-0 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantityValue(parseFloat(e.target.value))} value={quantityValue} required />
        <button type="button" onClick={handleIncrement}  id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
          <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}