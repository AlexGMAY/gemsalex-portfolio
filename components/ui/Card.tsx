import { cn } from "@/lib/utils";

export function Card({ className, children }) {
  return (
    <div className={cn("rounded-lg border p-6 shadow", className)}>
      {children}
    </div>
  );
}
export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}
export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}
export function CardContent({ children }) {
  return <div className="text-gray-500">{children}</div>;
}
