import {Folder} from '../models/Folder';


const foldersReturn = [
    {
        name: 'Folder1',
        key: 'f1',
        type: 'Folder',
        subFolders: [
            {
                name: 'Subfolder1',
                key: 'f1-sf1',
                type: 'Folder',
                files: [
                    { name: 'File1', key: 'f1-sf1-f1', type: 'FileClass' },
                    { name: 'File2', key: 'f1-sf1-f2', type: 'FileClass' }
                ]
            },
            {
                name: 'Subfolder2',
                key: 'f1-sf2',
                type: 'Folder',
                files: [
                    { name: 'File3', key: 'f1-sf2-f1', type: 'FileClass' }
                ]
            }
        ],
        files: [
            { name: 'File4', key: 'f1-f1', type: 'FileClass' }
        ]
    },
    {
        name: 'Folder2',
        key: 'f2',
        subFolders: [],
        type: 'Folder',
        files: [
            { name: 'File5', key: 'f2-f1', type: 'FileClass' }
        ]
    }
];
export const folders = foldersReturn.map(folder => {
    return new Folder(folder.name, folder.key, folder.subFolders, folder.files);
})
