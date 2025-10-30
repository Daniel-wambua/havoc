# GitHub Actions Workflow Setup (Optional)

The `.github/workflows/vercel-deploy.yml` file is **OPTIONAL**. 

## Important: Vercel Auto-Deployment

**You don't need this workflow!** When you connect your GitHub repository to Vercel:
- Vercel automatically deploys on every push to `main`
- It's faster and easier than using GitHub Actions
- No secrets or configuration needed

## If You Want to Use This Workflow

Only use this if you need custom deployment logic. You'll need to add these secrets:

### Adding GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

#### VERCEL_TOKEN
- Get from: https://vercel.com/account/tokens
- Click "Create Token"
- Name it "GitHub Actions"
- Copy and save as `VERCEL_TOKEN`

#### VERCEL_ORG_ID
- Get from: https://vercel.com/[your-team]/settings
- Or from `.vercel/project.json` after running `vercel` locally

#### VERCEL_PROJECT_ID
- Get from: Your project settings on Vercel
- Or from `.vercel/project.json` after running `vercel` locally

## Recommended Approach

**Just use Vercel's automatic deployments:**
1. Push code to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Done! Automatic deployments on every push

---

**Current Status:** The workflow warnings are expected until you add the secrets. You can safely ignore them or delete the workflow file if you're using Vercel's automatic deployments.
