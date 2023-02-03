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
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://fooswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://fooswap.com/pools',
  },
  {
    label: 'Jungles',
    icon: 'JungleIcon',
    href: 'https://fooswap.com/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://fooswap.com/lottery',
  },
  {
    label: 'IPO',
    icon: 'IfoIcon',
    href: 'https://fooswap.com/ipo',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://fooswap.com/referrals',
  },
  {
    label: 'Audits',
    icon: 'ShieldIcon',
    href: 'https://docs.fooswap.com/security/audits',
  },
  {
    label: 'Features',
    icon: 'FeatureIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.fooswap.com/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.fooswap.com/tokenomics/automatic-burning',
      },
      {
        label: 'Harvest Lockup',
        href: 'https://docs.fooswap.com/tokenomics/harvest-lockup',
      },
      {
        label: 'Anti-Whale',
        href: 'https://docs.fooswap.com/tokenomics/anti-whale',
      },
    ],
  },
  // {
  //   label: 'Price Charts',
  //   icon: 'ChartIcon',
  //   items: [
  //     {
  //       label: 'DexGuru',
  //       href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
  //     },
  //     {
  //       label: 'PooCoin',
  //       href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
  //     },
  //     {
  //       label: 'BoggedFinance',
  //       href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
  //     },
  //     {
  //       label: 'DexTools',
  //       href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
  //     },
  //   ],
  // },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/fooswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/fooswap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/fooswap/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/fooswap',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/foo',
      },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
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
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
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
