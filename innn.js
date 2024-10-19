const person = {

    Name :"sourav",
    age: 27 ,
    "person hobbies":["Guitar","sleeping","singing"]
}
//object.keys
for( const key in person)
{
    console.log(Object.keys(person));
    
}
for(const key in person)
{
    console.log(`${key}:${person}`);
    
}



