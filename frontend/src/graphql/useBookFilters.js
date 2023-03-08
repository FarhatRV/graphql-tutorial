import { useState } from "react";

export default function useBookFilters() {
  const [filters, _updateFilter] = useState({
    bookid: undefined,
    name: undefined
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value
    });
  };

  return {
    models: { filters },
    operations: { updateFilter }
  };
}
