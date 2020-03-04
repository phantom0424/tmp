FROM node:10.13-alpine as builder
# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "yarn.lock", ".npmrc", "./"]
RUN npm install
COPY . .
RUN npm run build && sed -i 's/relativepath/./g' dist/*.html dist/*.css

FROM httpd:2.4
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /usr/src/app/dist .