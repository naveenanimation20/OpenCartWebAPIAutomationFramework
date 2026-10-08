# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefix.spec.ts >> login to app with invalid credentials with JSON Data - pwapril@pw.com - wrong@123 
- Location: tests/loginpagefix.spec.ts:102:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/chromium_headless_shell-1234/chrome-linux/headless_shell
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.62.1.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.63.0-noble ║
║ - required: mcr.microsoft.com/playwright:v1.62.1-noble ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```