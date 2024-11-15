"use client";

import { useState } from "react";

export default function PaginateMedia() {
  const [itemOffset, setItemOffest] = useState(0);

  const endOffset = itemOffset + 20;
  const currentItems = items.slice(itemOffset, endOffset);

  return <></>;
}
