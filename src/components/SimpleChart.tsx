import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartDataPoint {
  label: string;
  income: number;
  expense: number;
}

interface SimpleChartProps {
  title: string;
  data: ChartDataPoint[];
  className?: string;
}

export function SimpleChart({ title, data, className }: SimpleChartProps) {
  const maxValue = Math.max(
    ...data.flatMap(d => [d.income, d.expense])
  );

  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <div className="flex gap-4">
                  <span className="text-income">
                    +${item.income.toLocaleString()}
                  </span>
                  <span className="text-expense">
                    -${item.expense.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex gap-1 h-6">
                <div 
                  className="bg-gradient-income rounded-sm"
                  style={{ 
                    width: `${(item.income / maxValue) * 50}%`,
                    minWidth: item.income > 0 ? '2px' : '0'
                  }}
                />
                <div 
                  className="bg-gradient-expense rounded-sm"
                  style={{ 
                    width: `${(item.expense / maxValue) * 50}%`,
                    minWidth: item.expense > 0 ? '2px' : '0'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}