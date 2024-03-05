import { useEffect } from "react";

export function useDay({ actualDateDay, setActualDay }) {
  useEffect(() => {
    switch (actualDateDay) {
      case 0:
        setActualDay("Domingo");
        break;
      case 1:
        setActualDay("Segunda feira");
        break;
      case 2:
        setActualDay("Terça feira");
        break;
      case 3:
        setActualDay("Quarta Feira");
        break;
      case 4:
        setActualDay("Quinta feira");
        break;
      case 5:
        setActualDay("Sexta feira");
        break;
      case 6:
        setActualDay("Sábado");
        break;
      default:
        setActualDay(null);
    }
  }, [actualDateDay, setActualDay]);
}