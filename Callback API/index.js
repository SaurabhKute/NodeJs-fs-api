// File System  - Callback API
// Defination: "The callback API's perform all operitions asynchronously, without blocking the event loop, then invoke a callback function upon completion or error."

import { error, log } from "console";
import * as fs from "fs";

// Creating a directory (Proper path must be specified)
try {
    const createDir = await fs.mkdir(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Callback API\\demo",
        () => {
            if (createDir) {
                console.log("Directory created...");
            }
        }
    );
} catch (error) {
    console.log(error);
}

// Creating a directory without specifying the path (Path is not required here)
try {
    const createDir = await fs.mkdir(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Callback API\\test\\demo",
        { recursive: true },
        () => {
            if (createDir) {
                console.log("Directory created...");
            }
        }
    );
} catch (error) {
    console.log(error);
}

// Read contents of directory
try {
    const readDir = await fs.readdir(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Callback API\\test",
        () => {
            if (readDir) {
                console.log("These are the contents of directory...");
            }
        }
    );
} catch (error) {
    console.log(error);
}

// Remove directory (condition: Directory should be empty)
try {
    const removeDir = await fs.rmdir(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Callback API\\demo",
        () => {
            if (removeDir) {
                console.log("Direcory deleted..");
            }
        }
    );
} catch (error) {
    console.log(error);
}

// Create and write file
try {
    const createFile = await fs.writeFile("readme.txt", "Hello Node JS", () => {
        if (createFile) {
            console.log("File created...");
        }
    });
} catch (error) {
    console.log("File created...");
}

// Read file
try {
    const readFile = await fs.readFile("readme.txt", "utf-8", (data) => {
        if (readFile) {
            console.log(data);
        }
    });
} catch (error) {
    console.log(error);
}

// Append data into the file
try {
    const appendData = await fs.appendFile(
        "readme.txt",
        "This is appended data",
        () => {
            if (appendData) {
                console.log("Data appended...");
            }
        }
    );
} catch (error) {
    console.log(error);
}

// Copy the file
try {
    const copyFile = await fs.copyFile("readme.txt", "copyData.txt", () => {
        if (copyFile) {
            console.log("File copied...");
        }
    });
} catch (error) {
    console.log(error);
}

// Get file information
try {
    const fileInfo = await fs.stat(
        "C:\\Users\\Webwerks\\Desktop\\JavaScript\\FS API\\Callback API\\readme.txt",
        (stats) => {
            console.log(stats);
        }
    );
} catch (error) {
    console.log(error);
}
