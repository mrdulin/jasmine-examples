function checkEnvirenmentHost() {
  var hostDetails;
  if (process.env.HTTPS_HOST) {
    hostDetails = process.env.HTTPS_HOST;
  } else if (process.env.https_HOST) {
    hostDetails = process.env.https_HOST;
  } else if (process.env.HTTP_HOST) {
    hostDetails = process.env.HTTP_HOST;
  } else if (process.env.http_HOST) {
    hostDetails = process.env.http_HOST;
  } else {
    hostDetails = false;
  }
  return hostDetails;
}

module.exports = checkEnvirenmentHost;
