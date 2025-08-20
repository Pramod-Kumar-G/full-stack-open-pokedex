const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// Health check endpoint for Render/monitoring services to verify app is running
app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
  console.log(`let the build fail`)
})
