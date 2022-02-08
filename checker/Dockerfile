FROM node:12-alpine
WORKDIR .
COPY index.js /
COPY package.json /
RUN npm install .
CMD ["node","index.js"]