<template>
  <a
    v-if="isLink"
    :id="idName"
    ref="link"
    :href="hrefTo"
    :class="buttonClass"
    class="base-button"
  >
    <template v-if="hasIcon">
      <img :src="iconSrc" class="base-button__icon" alt="img" srcset="">
    </template>
    <div class="base-button__text"> <slot /></div>
  </a>
  <button
    v-else
    :id="idName"
    ref="button"
    :class="buttonClass"
    :disabled="disabled"
    class="base-button"
  >
    <template v-if="hasIcon">
      <spinner v-show="isLoading" />
      <img v-show="!isLoading" :src="iconSrc" class="base-button__icon" alt="img" srcset="">
    </template>
    <div class="base-button__text">
      <slot />
    </div>
  </button>
</template>

<script>
import { addClass } from '@/helpers/utils'
import Spinner from '@/components/spinner/spinner.vue'

export default {
  name: 'Button',
  components: {
    Spinner
  },
  props: {
    idName: {
      default: '',
      type: String
    },
    hasIcon: {
      default: false,
      type: Boolean
    },
    isLink: {
      default: false,
      type: Boolean
    },
    hrefTo: {
      default: null,
      type: String
    },
    iconSrc: {
      default: '',
      type: String
    },
    disabled: {
      type: Boolean,
      defualt: false
    },
    buttonText: {
      default: 'Button',
      type: String,
      required: false
    },
    buttonClass: {
      default: '',
      type: String
    },
    buttonType: {
      default: null,
      validator(value) {
        // The value must match one of these strings
        return value.match(/^(default|success|warning|danger|disabled)$/)
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // Logging style colors.
      log: {
        success: '#28a745',
        warning: '#fd7e14',
        error: '#dc3545',
        default: '#0062ff'
      },
      hasButtonType: false
    }
  },

  created() {
    // Button type validation.
    if (this.buttonType && !this.buttonType.match(/^(default|success|warning|danger|disabled)$/)) {
      console.log(`%c BaseButton: Unexpected prop "button-type" of '${this.buttonType}'. Expected prop "button-type" of 'default', 'success', 'warning', 'danger' or 'disabled'.`, `color: ${this.log.error}`)
    } else {
      this.hasButtonType = true
    };

    // Button vs Link element validation.
    if (this.isLink && !this.hrefTo) {
      console.log('%c BaseButton: Expected button with "is-link=\'true\'" prop to have "href-to" attribute. Make sure your that your <base-button> has an "href-to" attribute', `color: ${this.log.error}`)
    };
  },
  mounted() {
    // Matches button type to base class.
    if (this.hasButtonType) {
      addClass(this.$refs.link || this.$refs.button, this.buttonType)
    };
  }
}
</script>

<style lang="scss">

</style>
