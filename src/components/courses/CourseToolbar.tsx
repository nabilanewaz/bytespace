"use client";

import { ChartNoAxesColumn, Funnel, ListFilter, Shapes } from "lucide-react";
import { SelectPill, type SelectOption } from "@/components/ui/SelectPill";
import {
  levelOptions,
  ratingOptions,
  sortOptions,
  type CourseFilters,
} from "@/lib/courseFilters";

type CourseToolbarProps = {
  filters: CourseFilters;
  categoryOptions: SelectOption[];
  onChange: (patch: Partial<CourseFilters>) => void;
};

/** Filter / Level / Category dropdowns on the left, sort order on the right. */
export function CourseToolbar({ filters, categoryOptions, onChange }: CourseToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        <SelectPill
          label="Filter"
          icon={Funnel}
          value={filters.rating}
          options={ratingOptions}
          onChange={(rating) => onChange({ rating })}
        />
        <SelectPill
          label="Level"
          icon={ChartNoAxesColumn}
          value={filters.level}
          options={levelOptions}
          onChange={(level) => onChange({ level })}
        />
        <SelectPill
          label="Category"
          icon={Shapes}
          value={filters.category}
          options={categoryOptions}
          onChange={(category) => onChange({ category })}
        />
      </div>
      <SelectPill
        label="Sort by"
        icon={ListFilter}
        value={filters.sort}
        options={sortOptions}
        onChange={(sort) => onChange({ sort })}
        showValue
      />
    </div>
  );
}
