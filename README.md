# `@lucid-softworks/array-binary-search-by`

Binary-search sorted values by a derived key.

```ts
import { binarySearchBy } from "@lucid-softworks/array-binary-search-by";

binarySearchBy([{ id: 1 }, { id: 3 }], 3, (item) => item.id); // 1
```

See the exported types and tests for exact edge-case behavior.
