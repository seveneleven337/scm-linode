export function getAuthor(){
    return "author gonzalo";
}

export function setKeyValues(){
    let array=[];
    const item={name:"Gonzalo"};
    array.push(item);
    const item2={nameClient:"React"};
    array.push(item2);
    return localStorage.setItem("array", JSON.stringify(array));
}

export function getKeyValues(){
    return (localStorage.getItem("array"));
}