# 使用官方 Node.js 轻量镜像
FROM node:22-alpine3.19

# 安装 bash 和其他工具
RUN apk update && apk upgrade
RUN apk add --no-cache bash

# 关闭历史记录文件的创建
RUN echo "export HISTFILE=/dev/null" >> /etc/profile

# 添加非 root 用户
RUN adduser -S user -G users -D

RUN apk add --no-cache sqlite

# 设置工作目录
WORKDIR /app

# 复制 package.json 并安装依赖
COPY package*.json ./
RUN npm install

# 复制项目所有代码
COPY . .

# 暴露端口
EXPOSE 8080

# 使用非 root 用户运行

# 启动应用
CMD ["npm", "start"]
