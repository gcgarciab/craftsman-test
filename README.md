# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

### Base requirements

- Use the to keep code consistent and readable. The codebase within this project has linting errors, and these will need to be resolved so that you can continue development - DONE
- Use a router within the code, create a `SuperheroView` component and apply it to the route `/superhero` - DONE
- Using (or another library if you'd prefer) create a search input which will either a list of books or the super heros from the open API's provided above. - DONE
- Use a responsive design approach to make the layout work on a range of screen sizes - WORKING ON IT
- Try to create a good user experience - WORKING ON IT
- Think about folder structure, and keeping code organised - DONE
- Consider cross-browser support (Chrome, Firefox, Safari, Microsoft Edge) - TODO

---

### Novice

All of the above requirements, plus:

- Use a pre-processor (SASS, LESS, Stylus, etc.) - DONE
- Create some CSS animations
- Create a "Show more" button on the superhero/book, when clicked we would like to show more information about the superhero/book - DONE

---

### Intermediate

All of the above requirements, plus:

- Allow the user to save heroes in state managent and then list them out on a different page - DONE
- Add option to sort the saved results by full-name / strength / gender / alignment - TODO

---

### Advanced

All of the above requirements, plus:

- Allow a user to compare two or more superheros/books against each other from the list
- Anything else that demonstrates your skills and competency as a developer. Here's a few possible ideas to get you started:

* Create a more advanced search with extra features
* Create custom routes to load specific heroes/books - DONE
* Introduce Unit testing - TODO
* Use the TDD process
* Use typescript - DONE
