const AWS = require('aws-sdk');

const ssm = new AWS.SSM();

async function main(params) {
  const ssmParameterData = await ssm
    .getParameter(params, (error, data) => {
      if (error) throw error;
      return data;
    })
    .promise();
  return ssmParameterData;
}

module.exports = { ssm, main };
