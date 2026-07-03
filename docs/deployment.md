# AWS Deployment

This site is deployed as a static Vite build to S3 behind CloudFront.

## Production Resources

- Domain: `https://actualidadelectronica.com.co`
- AWS account: `905418134397`
- Local AWS profile used for checks: `byrondev`
- S3 bucket: `actualidadelectronica.com.co`
- S3 website endpoint: `actualidadelectronica.com.co.s3-website-us-east-1.amazonaws.com`
- CloudFront distribution: `E2CIZVN9720NOK`
- CloudFront domain: `d2lwxqqamfb6na.cloudfront.net`
- CloudFront alias: `actualidadelectronica.com.co`
- ACM certificate region: `us-east-1`
- GitHub OIDC role: `arn:aws:iam::905418134397:role/actualiza-electronica-web-github-actions`

## Deploy Flow

Deploys are handled by the GitHub Actions workflow at `.github/workflows/deploy-aws.yml`.

The workflow is manual (`workflow_dispatch`) and only runs from `main`. It:

1. Installs dependencies with `npm ci`.
2. Builds the Vite app with `npm run build`.
3. Assumes the AWS OIDC role for this repo.
4. Syncs `dist/assets/` with long-lived immutable cache headers.
5. Syncs the rest of `dist/` with no-cache headers.
6. Invalidates CloudFront with `/*`.

No static AWS access keys are required in GitHub secrets.

## Local Checks

Use local AWS commands only for verification unless a manual local deploy is explicitly needed.

```sh
npm ci
npm run build
AWS_PROFILE=byrondev aws s3 sync dist/ s3://actualidadelectronica.com.co/ --dryrun --delete
AWS_PROFILE=byrondev aws cloudfront get-distribution --id E2CIZVN9720NOK --query 'Distribution.Status'
```

Production already had root-level public assets such as `robots.txt`, `sitemap.xml`, Google verification, customer logos, and service images. These were copied into `public/` so a future deploy with `--delete` keeps them under source control.