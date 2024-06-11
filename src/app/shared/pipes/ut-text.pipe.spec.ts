import { CutTextPipe } from './cut-text.pipe';

describe('CutTextPipe', () => {
    let cutText: CutTextPipe;

    beforeEach(() => {
        cutText = new CutTextPipe();
    });

    it('не трансформує "Hello, World!" при довжині 50', () => {
        expect(cutText.transform('Hello, World!', 50)).toBe('Hello, World!');
    });

    it('трансформує "Hello, World!" в "Hello..." при довжині 5', () => {
        expect(cutText.transform('Hello, World!', 5)).toBe('Hello...');
    });

    it('трансформує довгий текст і додає "..." в кінці', () => {
        const longText = 'This is a very long text that should be cut off';
        expect(cutText.transform(longText, 10)).toBe('This is a ...');
    });

    it('не додає "..." якщо текст коротший за задану довжину', () => {
        const shortText = 'Short text';
        expect(cutText.transform(shortText, 50)).toBe('Short text');
    });

    it('не трансформує порожній текст', () => {
        expect(cutText.transform('', 10)).toBe('');
    });
});
