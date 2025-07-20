import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinanceCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "income" | "expense";
  className?: string;
}

export function FinanceCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
  className,
}: FinanceCardProps) {
  return (
    <Card className={cn("shadow-card hover:shadow-elevated transition-all", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <Icon className={cn(
            "h-4 w-4",
            variant === "income" && "text-income",
            variant === "expense" && "text-expense",
            variant === "default" && "text-muted-foreground"
          )} />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">
            {subtitle}
          </p>
        )}
        {trend && (
          <p className={cn(
            "text-xs",
            trend.isPositive ? "text-income" : "text-expense"
          )}>
            {trend.isPositive ? "+" : ""}{trend.value}% desde el mes pasado
          </p>
        )}
      </CardContent>
    </Card>
  );
}