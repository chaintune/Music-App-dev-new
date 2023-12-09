export class WalletManager {
    private isConnected: boolean = false;
    private connectedAddress: string | null = null;
  
    public async connectWallet(): Promise<boolean> {
      try {
        // @ts-ignore
        const wallet = window?.aptos;
        await wallet.connect();
        this.isConnected = true;
        // Fetch and store the connected address
        const account = await wallet.account();
        this.connectedAddress = account?.address || null;
        console.log('Wallet connected successfully');
        return true;
      } catch (error) {
        console.error('Error connecting to the wallet:', error);
        this.isConnected = false;
        this.connectedAddress = null;
        return false;
      }
    }
  
    public async disconnectWallet(): Promise<boolean> {
      try {
        // @ts-ignore
        const wallet = window?.aptos;
        await wallet.disconnect();
        this.isConnected = false;
        this.connectedAddress = null;
        console.log('Wallet disconnected successfully');
        return true;
      } catch (error) {
        console.error('Error disconnecting from the wallet:', error);
        return false;
      }
    }
  
    public isWalletConnected(): boolean {
      return this.isConnected;
    }
  
    public getConnectedAddress(): string | null {
      return this.connectedAddress;
    }
  }
  


  
  // Example usage:
  const walletManager = new WalletManager();
  
  // Connect to the wallet
  walletManager.connectWallet()
    .then((connected) => {
      if (connected) {
        console.log('Wallet connected successfully');
        console.log('Is wallet connected?', walletManager.isWalletConnected());
      } else {
        console.log('Failed to connect to the wallet');
      }
    });
  
  // Disconnect from the wallet
  walletManager.disconnectWallet()
    .then((disconnected) => {
      if (disconnected) {
        console.log('Wallet disconnected successfully');
        console.log('Is wallet connected?', walletManager.isWalletConnected());
      } else {
        console.log('Failed to disconnect from the wallet');
      }
    });