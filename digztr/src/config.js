module.exports = {
  api: {
    baseUrl: process.env.NODE_ENV === 'production'?'http://ec2-18-217-60-167.us-east-2.compute.amazonaws.com':'http://localhost:8000'
  }
}
