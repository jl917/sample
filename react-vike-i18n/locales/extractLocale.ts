export { extractLocale }

import { locales, localeDefault } from './locales'

function extractLocale(url: string) {
  const urlPaths = url.split('/')

  let locale
  let urlWithoutLocale

  const firstPath = urlPaths[1]
  if (locales.filter((locale: string) => locale !== localeDefault).includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = '/' + urlPaths.slice(2).join('/')
  } else {
    locale = localeDefault
    urlWithoutLocale = url
  }

  return { locale, urlWithoutLocale }
}