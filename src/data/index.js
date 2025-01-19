import {Folder} from '../models/Folder';


const foldersReturn = [
    {
        name: 'Folder1',
        key: 'd1',
        type: 'Folder',
        subFolders: [
            {
                name: 'Subfolder1',
                key: 'd1-sd1',
                type: 'Folder',
                files: [
                    { name: 'File1', key: 'd1-sd1-f1', type: 'FileClass' },
                    { name: 'File2', key: 'd1-sd1-f2', type: 'FileClass' }
                ]
            },
            {
                name: 'Subfolder2',
                key: 'd1-sd2',
                type: 'Folder',
                files: [
                    { name: 'File3', key: 'd1-sd2-f1', type: 'FileClass' }
                ]
            }
        ],
        files: [
            { name: 'File4', key: 'd1-f1', type: 'FileClass' }
        ]
    },
    {
        name: 'Folder2',
        key: 'd2',
        subFolders: [],
        type: 'Folder',
        files: [
            { name: 'File5', key: 'd2-f1', type: 'FileClass' }
        ]
    }
];

    

export const folders = foldersReturn.map(folder => {
    return new Folder(folder.name, folder.key, folder.subFolders, folder.files);
})
