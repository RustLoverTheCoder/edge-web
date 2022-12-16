export const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
]

export const DocsNavigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/docs/getting-started', pathname: 'getting-started' },
      { title: 'Installation', href: '/docs/installation', pathname: 'installation' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Understanding caching', href: '/docs/understanding-caching', pathname: 'understanding-caching' },
      {
        title: 'Predicting user behavior',
        href: '/docs/predicting-user-behavior',
        pathname: 'predicting-user-behavior',
      },
    ],
  },
  {
    title: 'Advanced guides',
    links: [{ title: 'Writing plugins', href: '/docs/writing-plugins', pathname: 'writing-plugins' }],
  },
  {
    title: 'API reference',
    links: [
      { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict', pathname: 'cacheadvance-predict' },
      { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush', pathname: 'cacheadvance-flush' },
      { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert', pathname: 'cacheadvance-revert' },
      { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret', pathname: 'cacheadvance-regret' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/docs/how-to-contribute', pathname: 'how-to-contribute' },
      { title: 'Architecture guide', href: '/docs/architecture-guide', pathname: 'architecture-guide' },
      { title: 'Design principles', href: '/docs/design-principles', pathname: 'design-principles' },
    ],
  },
]
