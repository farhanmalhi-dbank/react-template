import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = true;
        return(
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Navigate
                            to={{ pathname: '/login', state: { from: props.location } }}
                        />
                    )
                }
            />
        );
};