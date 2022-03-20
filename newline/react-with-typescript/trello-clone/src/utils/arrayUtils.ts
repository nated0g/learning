type Item = {
  id: string
}

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id)
}

// TODO https://www.newline.co/books/fullstack-react-with-typescript/your-first-react-and-typescript-application-building-trello-with-drag-and-drop#define-the-moveitem-helper-function
export {}