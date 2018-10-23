const RestClient = require('signalwire').RestClient

const client = new RestClient(process.env.SIGNALWIRE_API_PROJECT, process.env.SIGNALWIRE_API_TOKEN)

// client.api.accounts(process.env.SIGNALWIRE_API_PROJECT)
//     .fetch()
//     .then(account => console.log(account.friendlyName))
// .done();

// client.applications.each(applications => console.log(applications.sid));

// client
//     .availablePhoneNumbers('US')
//     .tollFree.list({
//         areaCode: '310',
//     })
//     .then(availablePhoneNumbers => {
//         const number = availablePhoneNumbers[0];
//         return client.incomingPhoneNumbers.create({
//             phoneNumber: number.phoneNumber,
//         });
//     })
//     .then(purchasedNumber => console.log(purchasedNumber.sid));