docker run --name nodedata --rm -d -p 9001:9000 -v ~/nodedata:/nodejs --network mynet node node /nodejs/server.js
