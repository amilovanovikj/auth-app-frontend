# Build stage
FROM node:lts-alpine as build

WORKDIR /home/auth-app-frontend
COPY package.json yarn.lock tsconfig.json ./
RUN yarn

COPY . ./
RUN yarn build --prod

# Package stage
FROM nginx:1.23.1-alpine as package
COPY --from=build /home/auth-app-frontend/dist /usr/share/nginx/html
COPY --from=build /home/auth-app-frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]