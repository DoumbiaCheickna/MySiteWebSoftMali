# Stage 1: Build Angular application
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier tout le code source
COPY . .

# Builder l'application en mode production
RUN npm run build:prod

# Stage 2: Servir avec Nginx
FROM nginx:alpine

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage précédent
COPY --from=build /app/dist/softmali/browser /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande de démarrage (Nginx démarre automatiquement)
CMD ["nginx", "-g", "daemon off;"]
