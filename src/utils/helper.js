import {folders} from '../data/index.js';

export function getFolders() {
    return folders;
}

export function findFolderByKey(folders, key) {
    for (const folder of folders) {
        if (folder.key === key) {
            return folder;
        }
        if (folder.subFolders || folder.files) {
            const found = findFolderByKey(folder.subFolders, key)||findFolderByKey(folder.files, key);
            if (found) {
                return found;
            }
        }

    }
    return null;
}