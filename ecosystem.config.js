module.exports = {
  apps: [
    {
      name: 'tungtung-coming-soon',
      script: 'yarn start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
