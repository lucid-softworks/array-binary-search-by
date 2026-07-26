import {
  binarySearch,
  type Comparator,
} from "@lucid-softworks/array-binary-search";

function defaultComparator<T>(left: T, right: T): number {
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

/** Returns the index of an item whose selected key matches target, or -1. */
export function binarySearchBy<T, K>(
  values: readonly T[],
  target: K,
  select: (value: T) => K,
  compare: Comparator<K> = defaultComparator,
): number {
  return binarySearch(values.map(select), target, compare);
}
