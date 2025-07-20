import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SavingsGoal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
}

interface SavingsGoalsProps {
  title: string;
  goals: SavingsGoal[];
  className?: string;
}

export function SavingsGoals({ title, goals, className }: SavingsGoalsProps) {
  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{goal.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Meta: {goal.deadline}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {progress.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            );
          })}
          {goals.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No hay metas de ahorro configuradas
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}