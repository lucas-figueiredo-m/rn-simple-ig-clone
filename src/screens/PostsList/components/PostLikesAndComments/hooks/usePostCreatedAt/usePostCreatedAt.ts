import moment from 'moment';

export const usePostCreatedAt = (createdAt: string) => {
  const currentYear = new Date().getFullYear();

  const postYear = new Date(createdAt).getFullYear();

  const dateStringFormat =
    postYear === currentYear ? 'DD MMMM' : 'DD MMMM YYYY';

  return moment(createdAt).format(dateStringFormat);
};
