import dayjs from 'dayjs'

export function formatMonthDay (date, formarStr = "MM月DD日") {
  return dayjs(date).format(formarStr)
}

export function getDiffDay (startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}