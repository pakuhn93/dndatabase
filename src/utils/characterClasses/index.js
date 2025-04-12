// This line imports all .json files in the current directory eagerly (i.e., loaded immediately) 
// This only works with Vite.
const characterClasses = import.meta.glob('./*json', { eager: true });

const characterClassesArray = [];

// loop over each file imported
for(const path in characterClasses){
    // Optional: extract the file name without the extension to include as a property.
    // const name = path.split('/').pop().replace('json', '');

    // push an object with the file name and its json content
    characterClassesArray.push({
        // name,
        data: characterClasses[path]
    });
}

export default characterClassesArray;