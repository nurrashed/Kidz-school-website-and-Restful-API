const main = async () => {
    try {
            const api = await import('./api');
            const data = await api.getData();
            console.log(data);
            
            const html = await import('./html');
            
            html.displayCarts(data.cartCount);
            html.displayTeachers(data.teachers);
            html.displayOurclass(data.ourclasses);
        } 
    catch (e) {
        console.log(e);
    }
}
main();