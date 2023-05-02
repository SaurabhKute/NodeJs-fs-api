// File System  - Synchronous API
// Defination: "The sunchronous API's perform all operations synchronously, blocking the event loop until the operation completes or fails."

import * as fs from 'fs';

// Creating a directory (Proper path must be specified)
try {
    const createDir = await fs.mkdirSync(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Sync API\\demo"
    );
    if (createDir) {
        console.log("Directory created...");
    }
} catch (error) {
    console.log(error);
}

// Creating a directory without specifying the path (Path is not required here)
try {
    const createDir = await fs.mkdirSync(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Sync API\\test",
        { rescursive: true }
    );
    if (createDir) {
        console.log("Directory created...");
    }
} catch (error) {
    console.log(error);
}

// Read contents of directory
try {
    const readFile = await fs.readdirSync(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Sync API\\demo"
    );
    if (readFile) {
        for (let file of readFile) {
            console.log(file);
        }
    }
} catch (error) {
    console.log(error);
}

// Remove directory (condition: Directory should be empty)
try {
    const removeDir = await fs.rmdirSync(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Sync API\\demo"
    );
    if (removeDir) {
        console.log("Directory Deleted...");
    }
} catch (error) {
    console.log(error);
}

// Create file
try {
    const createFile = await fs.writeFileSync("readme.txt", "Hello JavaScript");
    if (createFile) {
        console.log("File created...");
    }
} catch (error) {
    console.log(error);
}

// Read file
try {
    const readFile = await fs.readFileSync("readme.txt", "utf-8");
    if (readFile) {
        console.log("These are the content of the file...");
    }
} catch (error) {
    console.log(error);
}

// Append data into the file
try {
    const appendData = await fs.appendFileSync(
        "readme.txt",
        " This is appended data "
    );
    if (appendData) {
        console.log("Appended successfully...");
    }
} catch (error) {
    console.log(error);
}

// Copy the file
try {
    const copyFile = await fs.copyFileSync("readme.txt", " copiedFile.txt");
    if (copyFile) {
        console.log("File copied...");
    }
} catch (error) {
    console.log(error);
}

// Get file information
try {
    const fileInfo = await fs.statSync("readme.txt");
    console.log("Is directory? ", fileInfo.isDirectory());
    console.log("Is file? ", fileInfo.isFile());
    console.log(fileInfo);
} catch (error) {
    console.log(error);
}
