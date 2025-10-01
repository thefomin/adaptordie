import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <main className="grid min-h-screen w-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#0069ff]">
            {error.status}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-background-foreground sm:text-7xl">
            Страница не найдена
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Извините, мы не смогли найти страницу, которую вы ищете.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#0069ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0066e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Главная
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Тех.поддержка <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return <></>;
}

export default NotFound;