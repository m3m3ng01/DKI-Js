import fs from 'fs';
import path from 'path';

const dataPath = path.resolve(
    'test-data/dataTestAdmin.json'
);

function readGeneratedData() {
    if (!fs.existsSync(dataPath)) {
        return [];
    }

    const contents = fs.readFileSync(dataPath, 'utf-8');
    if (contents.trim() === '') {
        return [];
    }

    let data;
    try {
        data = JSON.parse(contents);
    } catch (error) {
        throw new SyntaxError(
            `Unable to parse generated data at "${dataPath}": ${error.message}`
        );
    }

    if (!Array.isArray(data)) {
        throw new TypeError(`Generated data at "${dataPath}" must be a JSON array.`);
    }

    return data;
}

export function saveGeneratedData(category, data) {
    if (typeof category !== 'string' || category.trim() === '') {
        throw new TypeError('Generated data category must be a non-empty string.');
    }

    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
        throw new TypeError('Generated data must be an object.');
    }

    const existingData = readGeneratedData();
    const categoryIndex = existingData.findIndex(
        (entry) => entry !== null
            && typeof entry === 'object'
            && Object.hasOwn(entry, category)
    );
    const updatedEntry = { [category]: data };

    if (categoryIndex === -1) {
        existingData.push(updatedEntry);
    } else {
        existingData[categoryIndex] = updatedEntry;
        for (let index = existingData.length - 1; index > categoryIndex; index -= 1) {
            const entry = existingData[index];
            if (entry !== null && typeof entry === 'object' && Object.hasOwn(entry, category)) {
                existingData.splice(index, 1);
            }
        }

    }

    const temporaryPath = `${dataPath}.${process.pid}.tmp`;
    fs.writeFileSync(temporaryPath, JSON.stringify(existingData, null, 4));
    fs.renameSync(temporaryPath, dataPath);
}

export function getGeneratedData() {
    return readGeneratedData();
}
