const { series } = require("nps-utils");

const build = {
    default: series.nps(`tsc`),
    prod: series.nps('webpack.prod', 'tsc'),
    dev: 'node scripts/start.js'
};

const tsc = {
    default: `tsc`
};

const run = {
    default: `NODE_ENV=development ts-node src/server/server.ts`
};

const webpack = {
    prod: 'node scripts/build.js',
    dev: 'node scripts/start.js'
}

const startDev = {
    default: `nodemon`
};

const test = {
    defaul: 'jest',
    jest: 'jest',
    coverage: 'jest --coverage'
}

const reactscripts = {
    start: `react-scripts start`,
    build: `react-scripts build`,
    test: `react-scripts test`,
    eject: 'react-scripts eject'
};

module.exports = () => ({
    scripts: {
        build,
        tsc,
        run,
        startDev,
        reactscripts,
        webpack,
        test
    }
});
