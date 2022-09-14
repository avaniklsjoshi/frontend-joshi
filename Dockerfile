# Stage 1 - the build process-------------------

# pull official base image
FROM node:18.8.0 as build-deps
# set working directory
WORKDIR /usr/src/app
# install app dependencies
COPY package.json yarn.lock ./
RUN yarn
# add app
COPY . ./
RUN yarn build

# Stage 2 - the production environment----------
FROM nginx:latest
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]