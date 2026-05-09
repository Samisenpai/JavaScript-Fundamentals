// Array & Object deep Drive From Lecture 6

// Uid Genaretor 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0*3) | 0*8;
        return v.toString(16);
    });
}

console.log(uuidv4());