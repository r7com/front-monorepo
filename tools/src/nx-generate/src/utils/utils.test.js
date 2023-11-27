// // Import necessary modules and functions
// import { readFile, writeFile, copyFile, renameFile, removeFile } from './utils.mjs'

// // Assuming rootDir is a global variable or is set appropriately in your test setup

// describe('readFile', () => {
//   it('should read a file and return its content', async () => {
//     // Mocking the file content
//     const fileContent = 'This is the file content';
//     require('fs-extra').readFileSync.mockReturnValueOnce(fileContent);

//     const result = await readFile({ path: '/path/to/file.txt' });

//     expect(result).toEqual(fileContent);
//   });

//   it('should read a file, insert elements at a specified line, and return the updated content', async () => {
//     // Mocking the file content
//     const fileContent = 'Line 1\nLine 2\nLine 3';
//     require('fs-extra').readFileSync.mockReturnValueOnce(fileContent);

//     const result = await readFile({
//       path: '/path/to/file.txt',
//       line: 2,
//       insertElements: ['Inserted Line'],
//     });

//     expect(result).toEqual('Line 1\nInserted Line\nLine 2\nLine 3');
//   });
// });

// describe('writeFile', () => {
//   it('should write content to a file without formatting', async () => {
//     const content = 'This is the content';
//     await writeFile({ path: '/path/to/file.txt', content });

//     // Check if the writeFileSync function was called with the correct arguments
//     expect(require('fs-extra').writeFileSync).toHaveBeenCalledWith(rootDir + '/path/to/file.txt', content);
//   });

//   it('should write formatted content to a file', async () => {
//     const content = 'const x = 5;';
//     await writeFile({ path: '/path/to/file.js', content, type: 'babel' });

//     // Check if the writeFileSync function was called with the correct arguments
//     expect(require('fs-extra').writeFileSync).toHaveBeenCalledWith(rootDir + '/path/to/file.js', expect.any(String));
//   });
// });

// describe('copyFile', () => {
//   it('should copy a file from one location to another', async () => {
//     await copyFile('/path/to/destination.txt', '/path/to/source.txt');

//     // Check if the copy function was called with the correct arguments
//     expect(require('fs-extra').copy).toHaveBeenCalledWith(rootDir + '/path/to/destination.txt', rootDir + '/path/to/source.txt');
//   });
// });

// describe('renameFile', () => {
//   it('should rename a file by moving it to a new location', async () => {
//     await renameFile('/path/to/newfile.txt', '/path/to/oldfile.txt');

//     // Check if the move function was called with the correct arguments
//     expect(require('fs-extra').move).toHaveBeenCalledWith(rootDir + '/path/to/newfile.txt', rootDir + '/path/to/oldfile.txt', { overwrite: true });
//   });
// });

// describe('removeFile', () => {
//   it('should remove a file from the specified path', async () => {
//     await removeFile('/path/to/file.txt');

//     // Check if the remove function was called with the correct argument
//     expect(require('fs-extra').remove).toHaveBeenCalledWith(rootDir + '/path/to/file.txt');
//   });
// });
