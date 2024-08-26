import { DateTimeUtils } from '../DateTime/DateTime';

describe('DateTimeUtils', () => {
  jest.useFakeTimers().setSystemTime(new Date('2024-08-26'));
  describe('formatPostDate', () => {
    it('should format the post date without year', () => {
      const createdAt = '2024-06-01T12:34:56Z';
      const formattedDate = DateTimeUtils.formatPostDate(createdAt);
      expect(formattedDate).toBe('1 June');
    });

    it('should format the post date with year', () => {
      const createdAt = '2023-06-01T12:34:56Z';
      const formattedDate = DateTimeUtils.formatPostDate(createdAt);
      expect(formattedDate).toBe('1 June 2023');
    });

    it('should handle invalid date format', () => {
      const createdAt = '2022-13-01';
      const formattedDate = DateTimeUtils.formatPostDate(createdAt);
      expect(formattedDate).toBe('Invalid date');
    });
  });
});
