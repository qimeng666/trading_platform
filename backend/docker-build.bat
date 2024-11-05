@echo off
@echo on

docker rmi tradeapp-backend
docker build -t tradeapp-backend .
