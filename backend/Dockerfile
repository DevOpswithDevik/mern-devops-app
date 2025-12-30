FROM node:18-alpine

WORKDIR /app

# Copy package.json FIRST (with type: module)
COPY package*.json ./

RUN npm install

# Copy rest of source code
COPY . .

EXPOSE 5001

CMD ["npm", "start"]
