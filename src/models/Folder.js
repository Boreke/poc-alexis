import {FileClass} from './FileClass';

export class Folder {
    constructor(name, key, subFolders = [], files = []) {
        this.name = name;
        this.key = key;
        this.subFolders = this.generateSubFolders(subFolders);
        this.files = this.generateFiles(files);
        this.type = 'Folder';
    }

    generateSubFolders(subFoldersProperties) {
        return subFoldersProperties.map(subFolder => {
            const subFolders=subFolder.subFolders?this.generateSubFolders(subFolder.subFolders):[];
            const files= subFolder.files?this.generateFiles(subFolder.files):[];
            return new Folder(subFolder.name, subFolder.key, subFolders, files);
            
        });
    }
    generateFiles(files) {
        return files.map(file => {
            return new FileClass(file.name, file.key);
        });
    }

    addSubFolder(subFolder) {
        this.subFolders.push(subFolder);
    }

    addFile(file) {
        this.files.push(file);
    }
}