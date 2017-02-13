/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'react-deployer:index'
    },
    s3: {
      prefix: 'react-deployer'
    }
  };

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.redis.url = process.env.REDIS_URL || 'redis://0.0.0.0:6379/';
    ENV.plugins = ['build', 'redis']; // only care about deploying index.html into redis in dev
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.REACT_DEPLOYER_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.REACT_DEPLOYER_AWS_SECRET;
    ENV.s3.bucket = 'reactdeployer';
    ENV.s3.region = 'us-east-1';

    ENV['create-react-app'] = {
      publicURL: 'https://s3.amazonaws.com/reactdeployer/react-deployer/'
    }
  }

  if (deployTarget === 'production') {
    ENV.redis.url = process.env.REACT_DEPLOYER_REDIS_TOGO_URL;
  }

  return ENV;
}
