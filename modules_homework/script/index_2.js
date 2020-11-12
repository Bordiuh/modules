let fs = require('fs');

let readFiles = function (dir, files_){

    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    for (let i in files){
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            readFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

console.log(readFiles('C:/Users/dimab/WebstormProjects/get_set'));
