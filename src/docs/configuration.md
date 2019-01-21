### Custom install
You can configure the library by choosing to install only some components, directives or utilities
> If nothing is passed, **everything** will be loaded.

> If an empty array is passed, **nothing** will be loaded.

```javascript
import AsyncyVue from '@asyncy/vue'
import Vue from 'vue'

Vue.use(AsyncyVue, {
  components: ['ALogo', ...],
  /* directives: ['directive1', ...], */
  utils: []
})
```
