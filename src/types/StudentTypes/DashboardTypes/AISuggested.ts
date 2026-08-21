export type AISuggestionActionType = "continue" | "start";

export interface AISuggestion {
    id: number;
    type: string;
    title: string;
    subtitle: string;
    progress: number | null;
    action: string;
    actionType: AISuggestionActionType;
}