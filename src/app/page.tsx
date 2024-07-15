export default function Home() {
  // todo:
  // - remove this mocking and add a proper database (like prisma or sqlite)
  // - turn boxes into components

  const user = "Gabriel";
  const monthlyOutcome = 600.0;
  const monthlyIncome = 2000.0;
  const totalBalance = monthlyIncome - monthlyOutcome;

  return (
    <main>
      <div className="flex flex-col mx-24 my-16">
        <div>
          <h1 className="text-2xl font-bold pb-8">
            Olá {user}! Seja bem vindo.
          </h1>
          <div className="flex flex-row justify-between w-2/3 gap-6">
            <div className="p-4 shadow-2xl rounded-xl w-1/3 bg-card-foreground">
              <h2 className="font-bold text-primary-foreground text-lg pb-4">
                Seu balanço atual:
              </h2>
              <p className="font-bold text-primary-foreground text-3xl pr-8">
                R$: {totalBalance}
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-xl w-1/3 bg-card-foreground">
              <h2 className="font-bold text-primary-foreground text-lg pb-4">
                Entradas mensais:
              </h2>
              <p className="font-bold text-primary-foreground text-3xl pr-8">
                R$: {monthlyIncome}
              </p>
            </div>
            <div className="p-4 shadow-2xl rounded-xl w-1/3 bg-card-foreground">
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
