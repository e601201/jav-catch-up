import { experimental_evaluate as evaluate } from 'ai';

const result = await evaluate({
  model: 'typesafe-ai/jev',
  state: 'The support agent issued a full refund to the customer.',
  questions: {
    refunded: {
      type: 'boolean',
      instructions: 'Was a refund issued?',
    },
  },
  // zeroDataRetention は Pro / Enterprise プラン限定のため Hobby では外す
  // providerOptions: {
  //   gateway: { zeroDataRetention: true },
  // },
});

console.log(result.answers.refunded);
