const fs = require('fs');
const path = require('path');


//changer '../src/assets/all-content/albums' par votre chemin de dossier

//const albumsPath = path.join(__dirname, '../src/assets/all-content/albumsMini');
const albumsPath = path.join(__dirname, '../src/assets/all-content/albums');
fs.readdir(albumsPath, (err, files) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(files);
    files.forEach(fileName => {
        const newName = string_to_slug(fileName);
        if(fileName != newName){
            const oldPath = path.join(albumsPath, fileName);
            const newPath = path.join(albumsPath, newName);
            // console.log(`Should rename ${oldPath} to ${newPath}`);
            fs.renameSync(oldPath, newPath);
        }
    })
    
})

//cette fonction est celle qui determine les caractères à remplacer
//on peut la modifier selon nos besoins
function string_to_slug(str) {
    return str
        .toString()                     // Cast to string
        .toLowerCase()                  // Convert the string to lowercase letters
        .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim()                         // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w^.\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }