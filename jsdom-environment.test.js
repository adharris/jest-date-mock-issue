/**
 * @jest-environment jsdom
 */

 describe('manually creating JSDOM instance', () => {
     it('should be able to expire mock cookie expiry', ()  => {
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