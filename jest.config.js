module.exports = {
    coverageThreshold: {
      global: {
        lines: 90,
        branches: 20,
        function: 50,
        statements: 50,
      },
    },
    module: {
      rules: [
        {
          options: {
            failOnError: true
          }
        }
      ]
    }
  };

// module.exports = {
// coverageThreshold: {
//     global: {
//     lines: 50,
//     branches: 50,
//     function: 50,
//     statements: 50,
//     },
// },
// };




// "jest": {
//     "coverageThreshold": {
//       "global": {
//         "branches": 75,
//         "functions": 75,
//         "lines": 75,
//         "statements": 75
//       }
//     }
//   },

// module.exports = {
//     testEnvironment: 'node',
    
//     testMatch: [
//       '<rootDir>/__tests__/**/*.js'
//     ],
    
//     collectCoverageFrom: [
//       '<rootDir>/src/**/*.js'
//     ],
//     coverageReporters: ['text-summary', 'json-summary', 'lcov']
//   }
  