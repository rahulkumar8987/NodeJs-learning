const fetchData = () => {
    const Promise = newPromise ((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        } ,1500);
    });
    return Promise;
}

setTimeout(() => {
    console.log('Time is done !');
    fetchData()
    .then(text => {
        console.log('text');
        return fetchData();
})
       .then(text2 => {
        console.log('text2')
       })
}, 2000);