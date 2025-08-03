import {EIP712TypedData} from '@nikhil0341/limit-order-sdk'

export interface BlockchainProviderConnector {
    signTypedData(
        walletAddress: string,
        typedData: EIP712TypedData
    ): Promise<string>

    ethCall(contractAddress: string, callData: string): Promise<string>
}
