const msal = require('@azure/msal-node');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const sendEmail = async (mail) => {
    const clientSecret = process.env.OAUTH2_ClientSecret;
    const clientId = process.env.OAUTH2_ClientId;
    const tenantId = process.env.OAUTH2_TenantId;
    
    const aadEndpoint = 'https://login.microsoftonline.com';
    const graphEndpoint = 'https://graph.microsoft.com';

    const msalConfig = {
        auth: {
            clientId,
            clientSecret,
            authority: aadEndpoint + '/' + tenantId,
        },
    };

    const tokenRequest = {
        scopes: [graphEndpoint + '/.default'],
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);

    let headers;
    if( typeof window === 'undefined' ) {
        const Headers = (await import('node-fetch')).Headers
        headers = new Headers(headers)
    }
    const bearer = `Bearer ${tokenInfo.accessToken}`;

    headers.append('Authorization', bearer);
    headers.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({ message: mail, saveToSentItems: false }),
    };

    await fetch(
        graphEndpoint + '/v1.0/users/website@3dif.co/sendMail',
        options
    );
}

module.exports = sendEmail;