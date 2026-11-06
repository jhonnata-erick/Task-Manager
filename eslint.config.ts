import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Obter de forma segura o diretório do arquivo de configuração atual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "**/*.css",
      "**/*.scss",
      "**/*.sass",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      prettier: prettier,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
      sonarjs.configs.recommended,
      unicorn.configs.recommended,
    ],
    rules: {
      // Ativa o Prettier como uma regra do ESLint para apontar quebras de estilo
      "prettier/prettier": "error",

      // Customizações de Boas Práticas e Legibilidade (SonarJS)
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/no-duplicate-string": "warn",

      // Customizações de Legibilidade (Unicorn)
      "unicorn/name-replacements": "off",
      "unicorn/prevent-abbreviations": "warn",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/consistent-boolean-name": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  configPrettier,
);
