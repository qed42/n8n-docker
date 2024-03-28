module.exports = {
  apps: [{
      name: "n8n-docker",
      script: "sudo docker compose up",
      watch: false,
      autorestart: false,
  }]
}
