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
  variant?: "default" | "income" | "expense" | "recurring" | "savings";
  gradient?: boolean;
  glow?: boolean;
  className?: string;
}

export function FinanceCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
  gradient = false,
  glow = false,
  className,
}: FinanceCardProps) {
  return (
    <Card className={cn(
      "shadow-card hover:shadow-elevated transition-all border-border/50",
      gradient && variant === "income" && "bg-gradient-income border-income/20",
      gradient && variant === "expense" && "bg-gradient-expense border-expense/20", 
      gradient && variant === "recurring" && "bg-gradient-recurring border-recurring/20",
      gradient && variant === "savings" && "bg-gradient-savings border-savings/20",
      gradient && variant === "default" && "bg-gradient-primary border-primary/20",
      glow && "shadow-glow",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          gradient ? "text-white/90" : "text-muted-foreground"
        )}>
          {title}
        </CardTitle>
        {Icon && (
          <Icon className={cn(
            "h-4 w-4",
            gradient ? "text-white" : (
              variant === "income" && "text-income" ||
              variant === "expense" && "text-expense" ||
              variant === "recurring" && "text-recurring" ||
              variant === "savings" && "text-savings" ||
              "text-muted-foreground"
            )
          )} />
        )}
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          gradient ? "text-white" : "text-foreground"
        )}>
          {value}
        </div>
        {subtitle && (
          <p className={cn(
            "text-xs",
            gradient ? "text-white/80" : "text-muted-foreground"
          )}>
            {subtitle}
          </p>
        )}
        {trend && (
          <p className={cn(
            "text-xs font-medium",
            gradient ? "text-white/90" : (
              trend.isPositive ? "text-income" : "text-expense"
            )
          )}>
            {trend.isPositive ? "+" : ""}{trend.value}% desde el mes pasado
          </p>
        )}
      </CardContent>
    </Card>
  );
}