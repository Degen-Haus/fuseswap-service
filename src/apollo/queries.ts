import gql from 'graphql-tag'
import { BUNDLE_ID } from '@constants/index'

export function getTokenPriceQuery (tokenAddress: string) {
  const queryString = `
        query {
            bundle(id: "${BUNDLE_ID}") {
                ethPrice
            }
            token(id: "${tokenAddress}") {
                name
                symbol
                derivedETH
            }
        }
    `
  return gql(queryString)
}


export function getTokenDailyStatsQuery (tokenAddress: string, numberOfEntries: number = 7) {
    const queryString = `
        query {
            tokenDayDatas(where: { token: "${tokenAddress}", }, first: ${numberOfEntries}, orderBy: date, orderDirection: desc) {
                address: id
                date
                priceUSD
                totalLiquidityToken
                totalLiquidityUSD
                totalLiquidityETH
                dailyVolumeETH
                dailyVolumeToken
                dailyVolumeUSD
            }
        }
      `
    return gql(queryString)
  }
