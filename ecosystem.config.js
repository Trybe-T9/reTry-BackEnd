module.exports = {
  apps : [{
    name: "reTry-backend",
    script: "./src/server.js",
    instances: "max",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}