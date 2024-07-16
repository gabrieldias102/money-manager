import ValueBox from "@/components/ValueBox";

export default function Home() {
  // todo:
  // - remove this mocking and add a proper database (like prisma or sqlite)

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
            <ValueBox text={"Seu balanço atual:"} value={totalBalance} />
            <ValueBox text={"Entradas mensais:"} value={monthlyIncome} />
            <ValueBox text={"Saídas mensais:"} value={monthlyOutcome} />
          </div>
        </div>
      </div>
    </main>
  );
}
