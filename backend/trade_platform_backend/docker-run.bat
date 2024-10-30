@echo off
@echo on

docker run -it -u user -w /home/user -v %cd%:/home/user -p 8080:8080 --rm tradeapp-backend bash
