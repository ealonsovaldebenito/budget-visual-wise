import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Wifi, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecurringExpense {
  id: string;
  name: string;
  amount: number;
  category: string;
  nextPayment: string;
  frequency: string;
  icon: React.ComponentType<any>;
  isActive: boolean;
}

interface RecurringExpensesProps {
  title: string;
  expenses: RecurringExpense[];
  className?: string;
}

export function RecurringExpenses({ title, expenses, className }: RecurringExpensesProps) {
  const totalMonthly = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          {title}
          <div className="text-sm font-normal text-recurring">
            ${totalMonthly.toLocaleString()}/mes
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {expenses.map((expense) => {
            const IconComponent = expense.icon;
            return (
              <div
                key={expense.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-card border border-border/50 hover:border-recurring/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-recurring/10">
                    <IconComponent className="h-4 w-4 text-recurring" />
                  </div>
                  <div>
                    <div className="font-medium">{expense.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {expense.frequency} • Próximo: {expense.nextPayment}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-xs",
                      expense.isActive ? "bg-recurring/10 text-recurring" : "bg-muted"
                    )}
                  >
                    {expense.category}
                  </Badge>
                  <div className="font-semibold text-recurring">
                    ${expense.amount.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
          {expenses.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No hay gastos recurrentes configurados
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}