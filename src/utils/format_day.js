import dayjs from 'dayjs'

export function formatMonthDay (date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDay (startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}