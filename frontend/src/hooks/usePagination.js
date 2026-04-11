"use client";

import { useState } from "react";

export default function usePagination(data, perPage = 6) {
  const [page, setPage] = useState(1);

  const total = Math.ceil(data.length / perPage);

  const current = data.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return { current, page, setPage, total };
}