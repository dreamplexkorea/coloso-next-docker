"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { selectCurriculumPlan, type CurriculumDesign, type CurriculumPlan } from "@/lib/curriculum";

const SelectionContext = createContext<{
  plan: CurriculumPlan | undefined;
  selectPlan: (id: string) => void;
} | null>(null);

export function CurriculumSelection({ design, children }: { design?: CurriculumDesign; children: ReactNode }) {
  const [planId, setPlanId] = useState(design?.defaultPlanId);
  const plan = design ? selectCurriculumPlan(design, planId) : undefined;
  return <SelectionContext.Provider value={{ plan, selectPlan: setPlanId }}>{children}</SelectionContext.Provider>;
}

export function useCurriculumSelection() {
  return useContext(SelectionContext);
}
