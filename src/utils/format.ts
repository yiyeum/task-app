import moment from 'moment'

/**
 * Format date
 * ex) Sep 20, 2020
 * @param date date to format
 */
export const formatDate = (date: Date) => {
    return moment(date).format('MMM Do, YYYY')
}