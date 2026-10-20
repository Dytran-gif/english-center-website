import type { YourSkillsOverviewData } from "../../../types/StudentTypes/SkillsTypes";
import { monthlyTrendData } from "./monthlyTrendData";
import { skillProgressItemsData } from "./skillProgressItemsData";

export const yourSkillsOverviewData: YourSkillsOverviewData = {
  overallProgress: 68,
  trend: monthlyTrendData,
  selectedCEFRLevel: "B1",
  skills: skillProgressItemsData
};