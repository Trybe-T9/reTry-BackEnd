module.exports = {
  apps : [{
    name: "reTry-backend",
    script: "./src/server.js",
    exec_mode : "cluster",
    instances: "2",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
