function getDayOfWeek(dateString) {
  // console.log(dateString);
  // Create a Date object from the input date string
  const date = new Date(dateString);
  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week (0-6) and map to the day name
  const dayName = daysOfWeek[date.getUTCDay()];
  return dayName;
}

export { getDayOfWeek };
