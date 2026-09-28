/**
 * Two-column grid shared by the course hero and body so the video and the
 * tab content line up with the sidebar (725px + 412px at the design width).
 */
export const courseGrid =
  "lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 xl:grid-cols-[725px_412px] xl:justify-between";

/** Video height on desktop plus the gap below it; the sidebar is pulled up by this much. */
export const VIDEO_OVERLAP = "lg:-mt-[541px]";
