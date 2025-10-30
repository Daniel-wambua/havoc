const fs = require('fs-extra');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier');
const CleanCSS = require('clean-css');
const { minify: minifyJS } = require('terser');

const distDir = path.join(__dirname, '..', 'public');

// Clean and create dist directory
async function cleanDist() {
  await fs.remove(distDir);
  await fs.ensureDir(distDir);
  console.log('✓ Cleaned output directory');
}

// Copy and optimize files
async function copyFiles() {
  // Copy root index.html
  const indexPath = path.join(__dirname, '..', 'index.html');
  if (await fs.pathExists(indexPath)) {
    const html = await fs.readFile(indexPath, 'utf8');
    const minified = minifyHTML(html, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    });
    await fs.writeFile(path.join(distDir, 'index.html'), minified);
    console.log('✓ Minified and copied index.html');
  }

  // Copy src directory
  const srcPath = path.join(__dirname, '..', 'src');
  const distSrcPath = path.join(distDir, 'src');
  
  if (await fs.pathExists(srcPath)) {
    await fs.copy(srcPath, distSrcPath);
    console.log('✓ Copied src directory');
  }

  // Minify CSS files
  const cssDir = path.join(distSrcPath, 'assets', 'css');
  if (await fs.pathExists(cssDir)) {
    const cssFiles = await fs.readdir(cssDir);
    for (const file of cssFiles) {
      if (file.endsWith('.css')) {
        const filePath = path.join(cssDir, file);
        const css = await fs.readFile(filePath, 'utf8');
        const minified = new CleanCSS({
          level: 2,
          compatibility: 'ie11'
        }).minify(css);
        await fs.writeFile(filePath, minified.styles);
        console.log(`✓ Minified ${file}`);
      }
    }
  }

  // Minify JS files
  const jsDir = path.join(distSrcPath, 'assets', 'js');
  if (await fs.pathExists(jsDir)) {
    const jsFiles = await fs.readdir(jsDir);
    for (const file of jsFiles) {
      if (file.endsWith('.js')) {
        const filePath = path.join(jsDir, file);
        const js = await fs.readFile(filePath, 'utf8');
        const minified = await minifyJS(js, {
          compress: {
            dead_code: true,
            drop_console: false,
            drop_debugger: true,
            keep_classnames: true,
            keep_fnames: false,
            passes: 2
          },
          mangle: {
            keep_classnames: true,
            keep_fnames: false
          },
          format: {
            comments: false
          }
        });
        await fs.writeFile(filePath, minified.code);
        console.log(`✓ Minified ${file}`);
      }
    }
  }

  // Copy HTML files from pages directory
  const pagesDir = path.join(srcPath, 'pages');
  if (await fs.pathExists(pagesDir)) {
    const htmlFiles = await fs.readdir(pagesDir);
    for (const file of htmlFiles) {
      if (file.endsWith('.html')) {
        const srcFile = path.join(pagesDir, file);
        const html = await fs.readFile(srcFile, 'utf8');
        const minified = minifyHTML(html, {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true
        });
        await fs.writeFile(path.join(distSrcPath, 'pages', file), minified);
        console.log(`✓ Minified ${file}`);
      }
    }
  }

  // Copy component HTML files
  const componentsDir = path.join(srcPath, 'components');
  if (await fs.pathExists(componentsDir)) {
    const htmlFiles = await fs.readdir(componentsDir);
    for (const file of htmlFiles) {
      if (file.endsWith('.html')) {
        const srcFile = path.join(componentsDir, file);
        const html = await fs.readFile(srcFile, 'utf8');
        const minified = minifyHTML(html, {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        });
        await fs.writeFile(path.join(distSrcPath, 'components', file), minified);
        console.log(`✓ Minified component ${file}`);
      }
    }
  }
}

// Main build function
async function build() {
  console.log('🚀 Starting build process...\n');
  try {
    await cleanDist();
    await copyFiles();
    console.log('\n✅ Build completed successfully!');
    console.log(`📦 Output directory: ${distDir}`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
