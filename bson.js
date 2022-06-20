// most parts of this code is taken from the documentation, im new to bson.
const BSON = require('bson');
const Long = BSON.Long;

const number = 100

// Serialize a document
const doc = { long: Long.fromNumber(number) }; // doesn't support float variables.
const data_1 = BSON.serialize(doc);
console.log('data_1:', data_1);

// Deserialize the resulting Buffer
const doc_2 = BSON.deserialize(data_1);
console.log('doc_2:', doc_2);

// In another repo I'll be trying to make this with express.