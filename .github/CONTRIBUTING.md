# Contributing to Cordova Plugin iOS Permit getUserMedia

Thank you for your interest in contributing! This guide will help you get
started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test your changes: `npm test`
5. Format your code: `npm run format`

## Code Standards

- Code is formatted with Prettier (run `npm run format`)
- All files must pass linting (`npm run lint`)
- Package.json and plugin.xml must be valid
- Plugin installation must work correctly

## Testing

The project includes comprehensive automated testing:

```bash
# Run all tests
npm test

# Individual test commands
npm run lint          # Check code formatting
npm run validate      # Validate package.json
npm run check-xml     # Validate plugin.xml
npm run test-install  # Test plugin installation
```

## Submitting Changes

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all tests pass: `npm test`
4. Commit with a clear message
5. Push to your fork
6. Create a Pull Request

## Pull Request Process

1. Ensure your PR passes all GitHub Action workflows
2. Include a clear description of changes
3. Reference any related issues
4. Be prepared to address feedback

## Release Process

Releases are automated via GitHub Actions:

1. **For maintainers**: Create a version tag to trigger automatic release

   ```bash
   npm version patch  # or minor/major
   git push && git push --tags
   ```

2. **Manual release**: Use the GitHub Actions "Release" workflow

## Questions?

- Check existing issues and discussions
- Review the [Workflows Documentation](.github/WORKFLOWS.md)
- Open an issue for questions or problems
