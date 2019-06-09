import { mount, shallowMount } from '@vue/test-utils'
import ButtonBase from './base-button.vue'

describe('======= 🔮 Base Button component instance tests =======>', () => {
  let baseButton
  it('Mounts button component instance', () => {
    baseButton = shallowMount(ButtonBase)
    expect(baseButton.isVueInstance()).toBeTruthy()
  })

  it('Tests default text slots passage', () => {
    baseButton = mount(ButtonBase, {
      slots: {
        default: 'Test button text'
      }
    })
    expect(baseButton.text()).toBe('Test button text')
  })
})

describe('======= 🌡  Button props tests', () => {
  let baseButton
  it('Passes custom classes to base component', () => {
    baseButton = mount(ButtonBase, {
      slots: {
        default: 'Custom'
      },
      propsData: {
        buttonClass: 'test-class'
      }
    })
    expect(baseButton.classes()).toContain('test-class')
  })

  it('Mounts button when isLink is false', () => {
    baseButton = mount(ButtonBase, {
      slots: {
        default: 'Button'
      },
      propsData: {
        isLink: false
      }
    })
    const button = baseButton.find('button')
    expect(button.is('a')).toBe(false)
    expect(button.text()).toBe('Button')
  })

  it('Mounts link when isLink is true', () => {
    baseButton = mount(ButtonBase, {
      slots: {
        default: 'Link'
      },
      propsData: {
        isLink: true,
        hrefTo: 'https://akkadu.cn'
      }
    })
    const link = baseButton.find('a')
    expect(link.is('button')).toBe(false)
    expect(link.text()).toBe('Link')
  })

  it('Default prop types are correct', () => {
    baseButton = mount(ButtonBase, {
      slots: {
        default: 'Button'
      },
      propsData: {
        isLink: false
      }
    })
    expect(baseButton.vm.disabled).toBe(false)
    expect(baseButton.vm.iconSrc).toBe('')
    expect(typeof baseButton.vm.iconSrc).toBe('string')
    expect(baseButton.vm.buttonClass).toBe('')
    expect(typeof baseButton.vm.buttonClass).toBe('string')
  })
})
