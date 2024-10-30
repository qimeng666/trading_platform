//
// tradeapp_s3.js
//
// Exports 
// tradeapp_s3: an AWD S3Client object to our bucket
// s3_bucket_name: our S3 bucket
// s3_region_name: the AWS region where our bucket resides
//

const { S3Client } = require('@aws-sdk/client-s3');
const { fromIni } = require('@aws-sdk/credential-providers');

const fs = require('fs');
const ini = require('ini');

const config = require('./config.js');

const tradeapp_config = ini.parse(fs.readFileSync(config.tradeapp_config, 'utf-8'));
const s3_region_name = tradeapp_config.s3readonly.region_name;
const s3_bucket_name = tradeapp_config.s3.bucket_name;

//
// create s3 object for communicating with S3 service, but
// this does not open the connection:
//
let tradeapp_s3 = new S3Client({
  region: s3_region_name,
  credentials: fromIni({ profile: config.tradeapp_profile })
});

module.exports = { tradeapp_s3, s3_bucket_name, s3_region_name };
