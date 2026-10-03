import { describe, expect, test } from 'bun:test';
import { detectPlatform, PLATFORMS } from './download-platform';
describe('desktop downloads', () => {
  test('accepts the current Windows packaging name and the older name', () => {
    expect(PLATFORMS['windows-x64'].match('typsmthng-windows-x64-0.1.8.zip')).toBe(true);
    expect(PLATFORMS['windows-x64'].match('typsmthng-win-x64-0.1.7.zip')).toBe(true);
    expect(PLATFORMS['windows-x64'].match('typsmthng-macos-arm64.dmg')).toBe(false);
  });
  test('requires selection when Mac CPU information is unavailable', () => {
    expect(detectPlatform({ userAgent: 'Macintosh', platform: 'MacIntel' })).toBe(null);
    expect(detectPlatform({ userAgent: 'Macintosh', platform: 'MacIntel', userAgentData: { architecture: 'arm' } })).toBe('macos-arm64');
    expect(detectPlatform({ userAgent: 'Macintosh', platform: 'MacIntel', userAgentData: { architecture: 'x86' } })).toBe('macos-x64');
  });
});
