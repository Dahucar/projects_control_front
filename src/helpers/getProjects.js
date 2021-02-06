const baseUrl = 'http://localhost:4350/api';

export const getProject = ( endpoint = '', data = [], method = 'GET' ) => {
    const url =  endpoint != '' ?  `${ baseUrl }/${ endpoint }` : '/';
    console.log('base_url', url);
    if(method == 'GET'){
        return fetch( url, { method });
    }else{
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }
}