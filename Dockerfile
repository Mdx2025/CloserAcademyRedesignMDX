FROM node:22-alpine AS builder

RUN npm install -g pnpm@10

WORKDIR /app

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./

RUN pnpm install --frozen-lockfile --ignore-scripts || pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

RUN pnpm prune --prod

FROM node:22-alpine AS runtime

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY --from=builder --chown=app:app /app/build ./build
COPY --from=builder --chown=app:app /app/node_modules ./node_modules
COPY --from=builder --chown=app:app /app/package.json ./package.json

USER app

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
ENV BODY_SIZE_LIMIT=10M

EXPOSE 3000

CMD ["node", "build"]
