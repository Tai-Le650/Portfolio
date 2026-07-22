import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(start: string, end: string) {
  const fmt = (s: string) => {
    if (s.toLowerCase() === "present") return "Present";
    const [y, m] = s.split("-");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const monthName = m ? months[parseInt(m, 10) - 1] : "";
    return monthName ? `${monthName} ${y}` : y;
  };
  return `${fmt(start)} — ${fmt(end)}`;
}

export function formatMonthYear(value: string) {
  const [year, month] = value.split("-");
  if (!month) return year;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)));
}
