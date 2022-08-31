import { partytownSnippet } from '@builder.io/partytown/integration'

export default ({ app: { head } }) => {
  head.script.push({
    innerHTML: partytownSnippet({
      lib: '/~partytown/',
      // forward: ['dataLayer.push'],
    }),
    charset: 'utf-8',
  })
}
