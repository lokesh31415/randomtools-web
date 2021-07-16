// Types for rand select input component
export type SelectInputItem = {
  id: string;
  label: string;
  disabled?: boolean;
};
export type SelectInputData = SelectInputItem[];

export type RandColor = 'primary' | 'secondary' | 'danger' | string;
