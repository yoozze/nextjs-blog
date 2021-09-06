import Error from 'next/error';

function Error404(): JSX.Element {
    // return <h1>404 - Page Not Found</h1>
    return <Error statusCode={404} />;
}

export default Error404;
