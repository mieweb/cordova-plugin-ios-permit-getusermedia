#!/usr/bin/env node

/**
 * Simple script to test plugin installation locally
 */

const fs = require('fs');
const path = require('path');

// Check if plugin.xml exists and is valid
const pluginXmlPath = path.join(__dirname, 'plugin.xml');
if (!fs.existsSync(pluginXmlPath)) {
  console.error('❌ plugin.xml not found');
  process.exit(1);
}

const pluginXmlContent = fs.readFileSync(pluginXmlPath, 'utf8');
if (!pluginXmlContent.includes('<plugin')) {
  console.error('❌ plugin.xml is not a valid plugin file');
  process.exit(1);
}

// Check if source files exist
const srcDir = path.join(__dirname, 'src');
if (!fs.existsSync(srcDir)) {
  console.error('❌ src directory not found');
  process.exit(1);
}

const requiredFiles = ['PermitGetUserMedia.h', 'PermitGetUserMedia.m'];
for (const file of requiredFiles) {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Required source file ${file} not found`);
    process.exit(1);
  }
}

// Check package.json
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ package.json not found');
  process.exit(1);
}

try {
  const packageJson = require(packageJsonPath);
  if (!packageJson.name || !packageJson.version) {
    console.error('❌ package.json missing required fields');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ package.json is not valid JSON');
  process.exit(1);
}

console.log('✅ Plugin installation test passed');
console.log('✅ All required files are present');
console.log('✅ Plugin is ready for installation');
