# Alura Studies

### Projeto desenvolvido durante o curso da Alura de [React: escrevendo com Typescript](https://cursos.alura.com.br/course/react-modernizando-escrever-typescript)

### Tecnologias

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Sass](https://sass-lang.com/)
- [CSS Modules](https://www.google.com/search?channel=fs&client=ubuntu&q=typescript+plugin+css+modules)
- [uuid](https://www.npmjs.com/package/uuid)

---

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### `npx create-react-app APPNAME --template typescript`

#### `npm start`

---

### Style

- Install Sass

#### `npm install --save-dev sass`

- Install Css Modules

#### `npm install -D typescript-plugin-css-modules`

Add this to **tsconfig.json**:

```
{
	"compilerOptions": {
		"plugins": [{ "name": "typescript-plugin-css-modules" }]
	}
}
```

And (if needed) [use workspace version of typescript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript)

- Install uuid

#### `npm i uuid`

#### `npm i --save-dev @types/uuid`
