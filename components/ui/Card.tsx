import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-lg border p-6 shadow", className)}>
      {children}
    </div>
  );
}
export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}
export function CardContent({ children }: { children: ReactNode }) {
  return <div className="text-gray-500">{children}</div>;
}
