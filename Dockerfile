FROM node:18-slim
WORKDIR /app
COPY package*.json .
RUN npm i -g pnpm
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev-exposed"]
