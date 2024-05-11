# 노드 이미지를 기반으로 한다
FROM node:20.12.2

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드를 복사
COPY . .

# 앱을 빌드
RUN npm run build

CMD ["npm", "run", "server:prod"]

