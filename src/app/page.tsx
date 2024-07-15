export default function Home() {
  // todo:
  // remove this mocking and add a proper database (like prisma or sqlite)

  const user = "Gabriel";
  const totalBalance = "2.000,00";
  const monthlyOutcome = "1.200,00";
  const monthlyIncome = "600,00";

  return (
    <main>
      <div className="flex flex-col mx-24 my-16">
        <div>
          <h1 className="text-2xl font-bold pb-8">
            Olá {user}! Seja bem vindo.
          </h1>
          <div className="flex flex-row justify-between w-2/3">
            <div className="p-4 shadow-2xl rounded-xl max-w-fit bg-card-foreground">
              <h2 className="font-bold text-primary-foreground text-lg pb-4">
                Seu balanço atual:
              </h2>
              <p className="font-bold text-primary-foreground text-3xl pr-8">
                R$: {totalBalance}
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-xl max-w-fit bg-card-foreground">
              <h2 className="font-bold text-primary-foreground text-lg pb-4">
                Entradas mensais:
              </h2>
              <p className="font-bold text-primary-foreground text-3xl pr-8">
                R$: {monthlyIncome}
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-xl max-w-fit bg-card-foreground">
              <h2 className="font-bold text-primary-foreground text-lg pb-4">
                Saídas mensais:
              </h2>
              <p className="font-bold text-primary-foreground text-3xl pr-8">
                R$: {monthlyOutcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
