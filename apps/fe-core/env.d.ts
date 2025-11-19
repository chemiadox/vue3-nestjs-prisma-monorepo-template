/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_VARIABLE: string
  readonly VITE_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
