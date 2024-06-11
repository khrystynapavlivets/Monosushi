import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
    let customDate: CustomDatePipe;

    beforeEach(() => {
        customDate = new CustomDatePipe();
    });

    it('форматує дату "2024-06-10T00:00:00Z" в "10.06.24"', () => {
        const date = new Date('2024-06-10T00:00:00Z');
        expect(customDate.transform(date)).toBe('10.06.24');
    });

    it('форматує дату з користувацьким форматом "yyyy-MM-dd" в "2024-06-10"', () => {
        const date = new Date('2024-06-10T00:00:00Z');
        expect(customDate.transform(date, 'yyyy-MM-dd')).toBe('2024-06-10');
    });

    it('повертає null при відсутній даті', () => {
        expect(customDate.transform(null)).toBeNull();
    });

    it('форматує дату "2024-12-25T00:00:00Z" в "25.12.24"', () => {
        const date = new Date('2024-12-25T00:00:00Z');
        expect(customDate.transform(date)).toBe('25.12.24');
    });

    it('форматує дату "2024-01-01T00:00:00Z" в "01.01.24"', () => {
        const date = new Date('2024-01-01T00:00:00Z');
        expect(customDate.transform(date)).toBe('01.01.24');
    });
});
