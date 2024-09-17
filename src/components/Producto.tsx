import { ProductoCarta } from "@/interfaces/Producto";

export function Producto({ producto }: { producto: ProductoCarta }) {
  return (

    <a className="flex flex-row rounded-lg shadow min-w-full bg-white border border-gray-200 hover:bg-gray-100 ">
      <img
        className="object-cover h-full w-[128px] rounded-s-lg"
        src={producto.imagen}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 gap-4 leading-normal w-full">
        <section>
          <div className="flex flex-row justify-between items-center">
            <h5 className="my-0 text-md md:text-xl font-bold tracking-tight text-gray-900">
              {producto.nombre}
            </h5>
            <p className="mt-0 font-bold text-xl text-gray-900 ">
              {producto.precio}€
            </p>
          </div>
          <p className="my-1 font-normal max-md:text-xs text-gray-700 ">
            {producto.descripcion}
          </p>
        </section>

        <section className="flex justify-between items-center">
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-12 py-2.5 "
              placeholder="1"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </section>
      </div>
    </a>
  );
}
