
# Use a imagem oficial do Node.js como base
FROM node:20-slim AS base

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Argumento de build para a chave da API do Resend
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# Build da aplicação Next.js para produção
RUN npm run build

# Estágio de produção
FROM node:20-slim AS runner

WORKDIR /app

# Copie apenas os arquivos necessários do estágio de build
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.js ./next.config.js
COPY --from=base /app/app ./app
COPY --from=base /app/components ./components
COPY --from=base /app/data ./data

# Exponha a porta que o Next.js usa (padrão 3000)
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["npm", "start"]
