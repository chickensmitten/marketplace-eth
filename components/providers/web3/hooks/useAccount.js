

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0xb57af8e4a36c1e0394ce752cefad5cc868b0afc1ee813266f2adbd5cbfbfd1de": true,
  "0xf74749c67e7879271ded5eb35c781892bb487d6e3b7aaecc0f10ecc4baefcd91": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]

      if (!account) {
        throw new Error("Cannot retreive an account. Please refresh the browser.")
      }

      return account
    }
  )

  useEffect(() => {
    const mutator = accounts => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)

    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }
  }, [provider])

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}