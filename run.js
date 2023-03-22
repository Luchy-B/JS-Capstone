const fetchData = async () => {
    const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
    const request = await fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const res = await request.text();
    console.log(res);
}

fetchData();