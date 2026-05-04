const basePath = process.env.NODE_ENV === 'production' ? '/taxsim-emulator-demo-day-slides' : '';

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
