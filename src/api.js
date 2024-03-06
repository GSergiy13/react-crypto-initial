import {cryptoAssets, cryptoData} from './data.js';


export function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 2000)
  })
}

export function fetchAssets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2000)
  })
}