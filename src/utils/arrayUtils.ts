type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};

export function overrideItemAtIndex<T>(
  array: T[],
  newItem: T,
  targetIndex: number
) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
}

export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export const removeItemAtIndex = <T>(array: T[], from: number) => {
  return [...array.slice(0, from), ...array.slice(from + 1)];
};

export const insertItemAtIndex = <T>(array: T[], item: T, to: number) => {
  return [...array.slice(0, to), item, ...array.slice(to)];
};
