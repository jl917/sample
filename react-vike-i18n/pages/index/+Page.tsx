export { Page }
import { locales } from '../../locales'
import { Link } from '../../renderer/Link'
import { LocaleText } from '../../renderer/LocaleText'

import { Counter } from './Counter'

function Page() {

  return (
    <>
      <h1>
        <LocaleText>Welcome</LocaleText>
      </h1>
      <LocaleText>This page is</LocaleText>:
      <ul>
        <li>
          <LocaleText>Localized</LocaleText>. <LocaleText>Change language</LocaleText>:{' '}
          {locales.map((locale) => (
            <Link locale={locale} href="/" key={locale} style={{ marginLeft: 7 }}>
              {locale}
            </Link>
          ))}
        </li>
        <li>
          <LocaleText>Rendered to HTML</LocaleText>
        </li>
        <li>
          <LocaleText>Interactive</LocaleText> <Counter />
        </li>
      </ul>
    </>
  )
}