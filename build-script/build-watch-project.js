const concurrently = require('concurrently');
const fs = require('fs');

proj = process.argv[2];

const outputPath = `apps/jarvis-assistant/src/assets/widgets/${proj}`;

let command = `nx build --extra-webpack-config apps/widgets/${proj}/webpack.externals.js --prod --project ${proj} --single-bundle --source-map=true --output-path=${outputPath} --watch`;
try {
  fs.accessSync(`apps/widgets/${proj}/webpack.dev.js`);
  command = `nx build --extra-webpack-config apps/widgets/${proj}/webpack.dev.js --project ${proj} --single-bundle --source-map=true --output-path=${outputPath} --watch --show-circular-dependencies=false --progress=false --output-hashing=none`;
}catch(e){}

concurrently([command], {
  prefix: 'name',
  killOthers: ['failure', 'success']
});
