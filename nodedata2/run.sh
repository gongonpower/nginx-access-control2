docker run --name nodedata2 --rm -d -p 9002:9000 -v ~/nodedata2:/nodejs --network mynet node node /nodejs/server.js
