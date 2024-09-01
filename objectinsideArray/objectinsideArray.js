const users =[

    {user_id:1,First_name:'mohit',gender:`male` },
    {user_id:2,First_name:'Rohit',gender:`male` },
    {user_id:3,First_name:'Nitish',gender:`male` },

];// Here we are using third bracket bacause we have allready decleared mutiple objects  inside of users objects.//

for(let user of users)
    {
        console.log(user.user_id);
    }

