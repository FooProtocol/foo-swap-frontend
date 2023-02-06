import { ChainId } from '@fooswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x23520e4e6a01387da9a56737618125CD0F97dE28', // TODO
  [ChainId.BSCTESTNET]: '0x23520e4e6a01387da9a56737618125CD0F97dE28',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
