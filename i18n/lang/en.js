import enJson from '@/i18n/data/en.json'

/**
 * @description Maps all English i18n json files to the corresponding pages upon request.
 * @param {object} context Nuxt context
 */
export default (context) => {
  return Promise.resolve(enJson)
}
