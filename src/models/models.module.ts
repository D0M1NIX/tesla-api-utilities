import * as fs from 'fs';
import * as path from 'path';

const modelsPath = path.join(__dirname, 'vehicle');
const modelFiles = fs.readdirSync(modelsPath).filter(file => file.endsWith('.ts'));

modelFiles.forEach(file => {
    const modelName = path.basename(file, '.ts');
    module.exports[modelName] = require(path.join(modelsPath, file));
});