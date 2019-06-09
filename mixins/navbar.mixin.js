/**
 * @description Mixin for navbar.vue component when mounted to DOM.
 */
const navMixins = {
  // Custom Directives for Component
  data() {
    return {
      displayList: false
    }
  },
  directives: {
    'click-outside': {
      bind: (el, binding, vNode) => {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] The expression you provided '${binding.expression}' is not a function type, but has to be`
          if (compName) {
            warn += `Found in component '${compName}'`
          }
          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const { bubble } = binding.modifiers
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.vueClickOutside = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind: (el) => {
        // Remove Event Listeners
        document.removeEventListener('click', el.vueClickOutside)
        el.vueClickOutside = null
      }
    }
  },
  created() {
    if (this.$store) {
      this.$store.dispatch({
        type: 'authentication/getAuthentication'
      })
    }
  },
  mounted() {
    // Calls submitSearch() function when component is mounted on DOM.
    this.submitSearch()
  },
  methods: {
    /**
         * @description Submits search query for navbar.
         */
    submitSearch: () => {
      const searchIconButton = document.querySelector('#global-search-glass-icon')
      const searchForm = document.querySelector('#global-search-form')
      const searchBar = document.querySelector('#global-search-bar')

      if (searchIconButton && searchForm) {
        searchIconButton.addEventListener('click', () => {
          if (searchBar && (searchBar.value !== '')) {
            searchForm.submit()
          }
        })
      } else {
        // console.log('[Navbar]: No search button found.');
      }
    },
    /**
         * @description Toggles navbar menu when the burger is clicked.
         */
    toggleNavbarMenu() {
      this.displayList = !this.displayList
    },
    /**
         * @description Checks if Navbar Menu is open and closes it.
         */
    toggleDisplayMenu() {
      if (this.displayList) {
        this.displayList = !this.displayList
      }
      return this
    },
    /**
         * @description Hides Menu List fon Mobile view via custom directive.
         */
    hideMenu() {
      this.displayList = false
    }
  }
}

export default navMixins
