# GitHub Workflows Documentation

This repository includes automated workflows for testing and releasing the
Cordova plugin.

## Test Workflow

**File:** `.github/workflows/test.yml`

**Triggers:**

- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

**What it does:**

1. **Multi-Node Testing**: Tests on Node.js versions 16, 18, and 20
2. **Code Quality**: Runs Prettier linting and validation
3. **Plugin Validation**: Validates package.json and plugin.xml structure
4. **iOS Plugin Testing**: Tests plugin installation in a real Cordova project
   on macOS

**Jobs:**

- `test`: Basic validation on Ubuntu
- `validate-plugin`: iOS-specific testing on macOS with Cordova CLI

## Release Workflow

**File:** `.github/workflows/release.yml`

**Triggers:**

1. **Automatic**: When a version tag (`v*.*.*`) is pushed
2. **Manual**: Via GitHub Actions UI with custom version and npm tag

**What it does:**

1. Runs full test suite
2. Updates version (if manual trigger)
3. Builds the package
4. Publishes to npm
5. Creates GitHub release (for tag-triggered releases)

### Publishing Options

#### Option 1: Automated Release via Git Tags

```bash
# Bump version and create tag
npm version patch  # or minor/major
git push && git push --tags
```

#### Option 2: Manual Release via GitHub UI

1. Go to GitHub Actions tab
2. Select "Release" workflow
3. Click "Run workflow"
4. Choose version and npm tag (latest, beta, alpha)

### Required Secrets

To use the release workflow, you need to set up these GitHub repository secrets:

1. **NPM_TOKEN**: Your npm authentication token
   - Go to npmjs.com → Account Settings → Access Tokens
   - Create a new "Automation" token
   - Add it as a secret in GitHub repository settings

## Development Commands

```bash
# Run all tests locally
npm test

# Format code
npm run format

# Check formatting without fixing
npm run lint

# Validate package structure
npm run validate

# Check plugin.xml format
npm run check-xml

# Test plugin installation requirements
npm run test-install

# Full build process
npm run build
```

## Workflow Status

Check the current status of workflows:

- Test:
  [![Test](https://github.com/mieweb/cordova-plugin-ios-permit-getusermedia/actions/workflows/test.yml/badge.svg)](https://github.com/mieweb/cordova-plugin-ios-permit-getusermedia/actions/workflows/test.yml)
- Release:
  [![Release](https://github.com/mieweb/cordova-plugin-ios-permit-getusermedia/actions/workflows/release.yml/badge.svg)](https://github.com/mieweb/cordova-plugin-ios-permit-getusermedia/actions/workflows/release.yml)
