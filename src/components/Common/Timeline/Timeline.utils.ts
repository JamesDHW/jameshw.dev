export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

type ObjectWithDate = { date: Date };
export const sortByLatestDate = (a: ObjectWithDate, b: ObjectWithDate) =>
  a.date > b.date ? -1 : 1;

export const dateDiff = (start: Date, end: Date) => {
  const years =
    start.getMonth() <= end.getMonth()
      ? end.getFullYear() - start.getFullYear()
      : end.getFullYear() - start.getFullYear() - 1;

  const months =
    start.getMonth() <= end.getMonth()
      ? end.getMonth() - start.getMonth()
      : 12 + end.getMonth() - start.getMonth();

  let result = "";
  if (years > 0) result += `${years} year${years > 1 ? "s" : ""}`;
  if (years > 0 && months > 0) result += ", ";
  if (months > 0) result += `${months} month${months > 1 ? "s" : ""}`;

  return result;
};

export const formatDateRange = (start: Date | undefined, end: Date) => {
  let result = "";

  if (start !== undefined) result += `${formatDate(start)} - `;

  const isOngoing = formatDate(end) === formatDate(new Date());
  result += isOngoing ? "Present" : formatDate(end);

  if (start !== undefined && formatDate(start) !== formatDate(end))
    result += ` (${dateDiff(start, end)})`;

  return result;
};
