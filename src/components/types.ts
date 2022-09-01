interface ItemBase {
  id: string;
  initialValue?: string;
  label: string;
}

type SingleStringItem = ItemBase & { type: "single string" };
type MultiStringItem = ItemBase & { type: "multiple strings" };
type NumericItem = ItemBase & { type: "numeric" };
type LogicalItem = ItemBase & {
  type: "logical";
  options: {
    label: string;
    value: string;
  }[];
};
type EnumItem = ItemBase & {
  type: "enum";
  options: {
    label: string;
    value: string;
  }[];
};
type DateItem = ItemBase & { type: "date" };

export type Item =
  | SingleStringItem
  | MultiStringItem
  | NumericItem
  | LogicalItem
  | DateItem
  | EnumItem;

export interface Configuration {
  title: string;
  items: Item[];
  buttons: {
    applyButtonLabel: string;
    cancelButtonLabel: string;
  };
}
