FROM node:22-alpine

WORKDIR /app

# Copiem doar package.json și package-lock.json ca să facem install
COPY package*.json ./
RUN npm install --production

# Copiem restul codului
COPY ./src ./src

# Expunem portul aplicației
EXPOSE 5000

# Comanda de start
CMD ["node", "src/server_root.js"]
