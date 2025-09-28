# Deployment Guide

Simple deployment instructions for the frontend templates.

## Quick Deploy

### React Project
```bash
# 1. Create new React app
npx create-react-app my-app --template typescript
cd my-app

# 2. Install Tailwind CSS
npm install tailwindcss autoprefixer postcss
npx tailwindcss init -p

# 3. Copy templates
cp ../frontend-templates/Template1/DashboardTailwindReact.tsx src/components/

# 4. Start development
npm start
```

### Production Build
```bash
# Build for production
npm run build

# Serve with any static server
npx serve -s build
```

## Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t my-ui-components .
docker run -p 3000:3000 my-ui-components
```

## Environment Variables

Create `.env` file (copy from `.env.example`):

```bash
REACT_APP_API_URL=https://your-api.com
REACT_APP_ENABLE_ANALYTICS=true

```



## Common Issues

**Q: Components not loading?**
```bash
# Check dependencies
npm list react tailwindcss
```



**Q: Styling not working?**
- Ensure Tailwind CSS is configured in `tailwind.config.js`
- Add Tailwind directives to your CSS file

## That's It!

For complex enterprise deployments, CI/CD pipelines, or advanced configurations, you'll need to set those up based on your specific requirements.