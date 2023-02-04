import { MenuEntry } from '@fooswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://fooswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bridge',
    icon: 'PoolIcon',
    href: '/bridge',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://fooswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://fooswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://fooswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://fooswap.info/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/fooswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.fooswap.com',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.fooswap.com/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://fooswap.medium.com',
      },
      {
        label: 'Voting',
        href: 'https://voting.fooswap.com/',
      },
    ],
  },
]

export default config
