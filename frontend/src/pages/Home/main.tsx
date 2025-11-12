/**
 * @page HomePage
 * @summary Home page for the Japanese restaurant website
 * @domain restaurant
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Comida Japonesa</h1>
        <p className="mt-4 text-lg text-gray-600">Bem-vindo ao nosso restaurante</p>
      </div>
    </div>
  );
};

export default HomePage;
