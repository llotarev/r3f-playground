export const ROUTES = {
  ROOT: '/',
  SHADER_HMR: '/shader-hmr',
} as const;

export const NAVIGATION = [
  {
    path: ROUTES.ROOT,
    label: 'Home',
  },
  {
    path: ROUTES.SHADER_HMR,
    label: 'Shader HMR',
  }
] as const;
