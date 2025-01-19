import {FileClass} from './FileClass';

export class Folder {
    constructor(name, key, subFolders = [], files = []) { // Add this line
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
    
    generateFolderHTML() {
        const subFoldersHTML = this.subFolders?.map(subFolder => subFolder.generateFolderHTML());
        const filesHTML = this.files?.map(file => file.generateFileHTML());
        return `
            <div class="flex flex-row space-x-2 text-primary-300 ">
                ${this.key.length>2?'└&nbsp;':''}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                <button  class="flex  items-center text-primary-200 cursor-pointer" aria-label=${this.key}>
                    ${this.name}
                </button>
            </div>

            ${subFoldersHTML?.length ? `<ul class="flex flex-col ml-2">
            ${subFoldersHTML.map(subFolderHTML => `<li class="flex flex-col space-x-2">${subFolderHTML}</li>`).join('')}
            </ul>` : ''}
            
            ${filesHTML?.length ? `<ul class="flex flex-col ml-2">
                ${filesHTML.map(fileHTML => `<li class="flex flex-col ml-4 space-x-2">${fileHTML}</li>`).join('')}
            </ul>` : ''}
        `;
    }
}