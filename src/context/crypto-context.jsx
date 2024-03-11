import { createContext, useEffect, useState  } from 'react'
import { fakeFetchCrypto, fetchAssets } from '../api.js';

import {percentDifference} from '../utills.js'

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false
});

export function CryptoContextProvader({children}) {
  const [loading, setLoader] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
     async function preload() {
      setLoader(true)

      const { result } = await fakeFetchCrypto();
      const assets = await fetchAssets();

      setCrypto(result)
      setAssets(assets.map(asset => {
        const coin = result.find((c) => c.id === asset.id)


        return {
          grow: asset.price < coin.price,
          growPercent: percentDifference(asset.price, coin.price),
          totalAmount: asset.amount * coin.price,
          totalProfit:  asset.amount * coin.price - asset.amount * asset.price ,
          ...asset
        }
      }))
      setLoader(false)
    }

    preload();
  }, [])  

  return <CryptoContext.Provider value={{loading, crypto, assets}} >{children}</CryptoContext.Provider>
}

export default CryptoContext;