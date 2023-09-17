FROM node:20-alpine
WORKDIR /microservice_doordash
ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]

