const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'VoiceMagic',
    siteDescription: 'Voice Assistant for Notion.',
    siteKeywords: 'Notion',
    siteUrl: 'http://voicemagic.in',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@voicemagicHq'
  },
})
