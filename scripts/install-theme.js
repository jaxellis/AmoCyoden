const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distDir = './dist';
const vsixFiles = fs
	.readdirSync(distDir)
	.filter((file) => file.endsWith('.vsix'))
	.sort(
		(a, b) =>
			fs.statSync(path.join(distDir, b)).mtimeMs -
			fs.statSync(path.join(distDir, a)).mtimeMs
	);

if (vsixFiles.length === 0) {
	console.error('❌ No .vsix file found in dist folder');
	process.exit(1);
}

const vsixPath = path.join(distDir, vsixFiles[0]);
console.log(`🔌 Installing ${path.basename(vsixPath)}`);
execSync(`code --install-extension "${vsixPath}"`, { stdio: 'inherit' });
