import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Calendar,
  CreditCard,
  Wifi,
  Zap,
  Home,
  Car
} from "lucide-react";
import { FinanceCard } from "@/components/FinanceCard";
import { SimpleChart } from "@/components/SimpleChart";
import { TransactionList } from "@/components/TransactionList";
import { SavingsGoals } from "@/components/SavingsGoals";
import { RecurringExpenses } from "@/components/RecurringExpenses";

// Datos de ejemplo - en producción vendrían del backend
const mockTransactions = [
  {
    id: "1",
    description: "Salario mensual",
    amount: 3500,
    type: "income" as const,
    category: "Trabajo",
    date: "2024-01-15",
  },
  {
    id: "2", 
    description: "Supermercado",
    amount: -250,
    type: "expense" as const,
    category: "Alimentación",
    date: "2024-01-14",
  },
  {
    id: "3",
    description: "Netflix",
    amount: -15,
    type: "expense" as const,
    category: "Entretenimiento", 
    date: "2024-01-13",
  },
  {
    id: "4",
    description: "Freelance",
    amount: 800,
    type: "income" as const,
    category: "Trabajo Extra",
    date: "2024-01-12",
  },
];

const mockSavingsGoals = [
  {
    id: "1",
    name: "Fondo de Emergencia",
    target: 10000,
    current: 7500,
    deadline: "Dic 2024",
  },
  {
    id: "2",
    name: "Vacaciones Europa",
    target: 5000,
    current: 2800,
    deadline: "Jul 2024",
  },
  {
    id: "3",
    name: "Nueva Laptop",
    target: 2000,
    current: 1200,
    deadline: "Mar 2024",
  },
];

const mockChartData = [
  { label: "Ene", income: 4300, expense: 2800 },
  { label: "Feb", income: 3800, expense: 3200 },
  { label: "Mar", income: 4100, expense: 2900 },
  { label: "Abr", income: 3900, expense: 3100 },
  { label: "May", income: 4200, expense: 2700 },
  { label: "Jun", income: 4500, expense: 3300 },
];

const mockRecurringExpenses = [
  {
    id: "1",
    name: "Netflix",
    amount: 15,
    category: "Streaming",
    nextPayment: "28 Ene",
    frequency: "Mensual",
    icon: Wifi,
    isActive: true,
  },
  {
    id: "2",
    name: "Renta",
    amount: 1200,
    category: "Vivienda", 
    nextPayment: "1 Feb",
    frequency: "Mensual",
    icon: Home,
    isActive: true,
  },
  {
    id: "3",
    name: "Seguro Auto",
    amount: 180,
    category: "Transporte",
    nextPayment: "15 Feb",
    frequency: "Mensual", 
    icon: Car,
    isActive: true,
  },
  {
    id: "4",
    name: "Electricidad",
    amount: 85,
    category: "Servicios",
    nextPayment: "20 Feb",
    frequency: "Mensual",
    icon: Zap,
    isActive: true,
  },
  {
    id: "5",
    name: "Tarjeta de Crédito",
    amount: 450,
    category: "Deuda",
    nextPayment: "10 Feb", 
    frequency: "Mensual",
    icon: CreditCard,
    isActive: true,
  },
];

export default function Dashboard() {
  const totalBalance = 32872.99;
  const monthlyIncome = 4300;
  const monthlyExpenses = 2800;
  const savings = 1500;
  const monthlyRecurring = mockRecurringExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Resumen de tu situación financiera
          </p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <FinanceCard
            title="Balance Total"
            value={`$${totalBalance.toLocaleString()}`}
            subtitle="Balance actual"
            icon={DollarSign}
            variant="default"
            gradient={true}
            glow={true}
            trend={{ value: 8, isPositive: true }}
          />
          <FinanceCard
            title="Ingresos del Mes"
            value={`$${monthlyIncome.toLocaleString()}`}
            subtitle="Enero 2024"
            icon={ArrowUpCircle}
            variant="income"
            gradient={true}
            trend={{ value: 12, isPositive: true }}
          />
          <FinanceCard
            title="Gastos del Mes"
            value={`$${monthlyExpenses.toLocaleString()}`}
            subtitle="Enero 2024"
            icon={ArrowDownCircle}
            variant="expense"
            gradient={true}
            trend={{ value: 5, isPositive: false }}
          />
          <FinanceCard
            title="Gastos Recurrentes"
            value={`$${monthlyRecurring.toLocaleString()}`}
            subtitle="Comprometido mensual"
            icon={Calendar}
            variant="recurring"
            gradient={true}
            trend={{ value: 2, isPositive: false }}
          />
          <FinanceCard
            title="Ahorro Efectivo"
            value={`$${(monthlyIncome - monthlyExpenses - monthlyRecurring).toLocaleString()}`}
            subtitle="Disponible para ahorrar"
            icon={Wallet}
            variant="savings"
            gradient={true}
            trend={{ value: 18, isPositive: true }}
          />
        </div>

        {/* Gráficos y listas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SimpleChart
            title="Ingresos vs Gastos (6 meses)"
            data={mockChartData}
          />
          <TransactionList
            title="Transacciones Recientes"
            transactions={mockTransactions}
          />
        </div>

        {/* Gastos recurrentes y metas de ahorro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecurringExpenses
            title="Gastos Recurrentes"
            expenses={mockRecurringExpenses}
          />
          <SavingsGoals
            title="Metas de Ahorro"
            goals={mockSavingsGoals}
          />
        </div>
      </div>
    </div>
  );
}