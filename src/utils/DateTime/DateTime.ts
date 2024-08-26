import moment from 'moment';

export class DateTimeUtils {
  static formatPostDate(createdAt: string) {
    const currentYear = new Date().getFullYear();
    const postYear = new Date(createdAt).getFullYear();
    const dateStringFormat =
      postYear === currentYear ? 'D MMMM' : 'D MMMM YYYY';
    return moment(createdAt).format(dateStringFormat);
  }
}
