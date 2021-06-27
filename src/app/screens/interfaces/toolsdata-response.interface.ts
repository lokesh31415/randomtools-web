export interface ToolsDataResponse {
  groups: { id: string; label: string; tools: string[] }[];
  tools: {
    id: string;
    label: string;
    path: string;
    keywords: string[];
    icon: string;
    disabled?: boolean;
    apiPath?: string;
  }[];
}
