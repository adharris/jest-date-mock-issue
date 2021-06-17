const jsdom = require('jsdom')

describe('Creating a JSDOM instance manually', () => {
    it('should be able to expire mock cookie expiry', ()  => {
        const dom = new jsdom.JSDOM();
        const document = dom.window.document;
        expect(document.cookie).toBe("");

        const maxAge = 5;
        document.cookie = `KEY=VALUE; max-age=${maxAge}`;
        expect(document.cookie).toBe("KEY=VALUE");

        jest.useFakeTimers("modern")
        jest.setSystemTime(Date.now() + maxAge * 60 * 1000);
        expect(document.cookie).toBe("");
        jest.useRealTimers();
    });
});