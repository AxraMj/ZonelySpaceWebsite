# Zonely Space - Vercel Deployment Guide

## Quick Deploy to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/zonely-space)

### Manual Deployment Steps

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/your-username/zonely-space.git
   cd zonely-space
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel**
   
   **Option A: Using Vercel CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

   **Option B: Using GitHub Integration**
   1. Push your code to GitHub
   2. Connect your GitHub repo to Vercel
   3. Vercel will automatically deploy on every push

## CI/CD Pipeline Setup

### GitHub Secrets Configuration

Add these secrets to your GitHub repository settings:

1. **VERCEL_TOKEN**: Get from https://vercel.com/account/tokens
2. **ORG_ID**: Found in your Vercel team settings
3. **PROJECT_ID**: Found in your Vercel project settings

### Environment Variables

If you need environment variables for production:

1. In Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add any production environment variables
3. For this project, no special env vars are required

## Build Configuration

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Dev Command**: `npm run dev`

## Domain Configuration

### Custom Domain Setup

1. In Vercel Dashboard > Your Project > Settings > Domains
2. Add your custom domain (e.g., `zonelyspace.com`)
3. Configure DNS records as instructed by Vercel
4. SSL certificates are automatically handled

### Recommended Domain Structure
- Production: `zonelyspace.com`
- Preview: `preview.zonelyspace.com`
- Development: `dev.zonelyspace.com`

## Performance Optimization

The deployment includes:
- ✅ Static asset caching (1 year)
- ✅ Gzip compression
- ✅ Security headers
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Mobile optimization

## Monitoring and Analytics

After deployment, consider adding:
- Vercel Analytics
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring

## Troubleshooting

### Common Issues

1. **Build fails**: Check `npm run build` works locally
2. **Static files not loading**: Verify file paths in code
3. **404 errors**: Check routing configuration in `vercel.json`

### Support

- Vercel Documentation: https://vercel.com/docs
- GitHub Issues: Create an issue in your repository
- Vercel Support: support@vercel.com

## AdSense Integration

After deployment:
1. Verify site is live and accessible
2. Submit to Google AdSense for approval
3. Add AdSense code to `client/index.html` after approval
4. Monitor performance and compliance

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Site tested on mobile and desktop
- [ ] Google Analytics added (optional)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to search engines
- [ ] AdSense application submitted