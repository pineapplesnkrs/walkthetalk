# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Constant Contact Integration

This project includes integration with Constant Contact for managing the mailing list. To set up the integration:

1. Create a Constant Contact account if you don't have one already.
2. Create a sign-up form in your Constant Contact account and note the form ID.
3. Update the form ID in the `MailingListSignup.tsx` component:

```tsx
window._ctct_m.push(['signUpFormWidget', { formId: 'YOUR_FORM_ID_HERE' }]);
```

Also update the form container div:

```tsx
<div className="ctct-form-embed form_id_YOUR_FORM_ID_HERE"></div>
```

### How It Works

The "Join Our Mailing List" button on the homepage opens a modal that loads Constant Contact's embeddable form. When users enter their email address and submit the form, the data is sent directly to Constant Contact to add them to your mailing list.

### Running the Application

To run the application:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. For production, build the application:
   ```
   npm run build
   ```

4. Serve the built application:
   ```
   npm run preview
   ```
