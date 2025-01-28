const { Connection, clusterApiUrl, PublicKey } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

exports.fetchNewTokens = async () => {
  try {
    // استرداد حسابات البرامج الجديدة (العملات الجديدة)
    const programAccounts = await connection.getProgramAccounts(new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'));
    
    // تحليل الحسابات للحصول على بيانات العملات الجديدة
    const tokens = programAccounts.map(account => {
      return {
        publicKey: account.pubkey.toBase58(),
        data: account.account.data.toString('hex'),
      };
    });

    return tokens;
  } catch (error) {
    throw new Error(`Error fetching tokens from Solana: ${error.message}`);
  }
};
