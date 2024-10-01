FROM node:latest as base
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:stable as production                        
WORKDIR /app
COPY --from=builder /app/out /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]