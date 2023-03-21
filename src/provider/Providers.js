

import React from 'react';
import { BASE_REQUEST } from '../api/api';
import { Context } from '../context/context';


export default function Providers({ children }) {
    const [route, setRoute] = React.useState("/todos");
    const [data, setData] = React.useState();

    React.useEffect(() => {
        const request = BASE_REQUEST(route);

        request
            .then(res => {
                if (res) {
                    console.log(res);
                    setData(res.data)
                }
            })
    }, [route])

    const values = React.useMemo(() => ({
        setRoute,
        route,
        data
    }), [route, setRoute, data])

    return (
        <Context.Provider value={values} >
            {children}
        </Context.Provider >
    )
}
