import { useState } from "react";

export const useMutation = <P, R>(request: (data: P) => Promise<R>) => {
    const [state, setState] = useState<{
        data: R | null;
        error: unknown | null;
        isLoading: boolean;
        isSuccess: boolean;
        isInitializd: boolean;
        isError: boolean;
    }>({
        data: null,
        error: null,
        isLoading: false,
        isSuccess: false,
        isInitializd: false,
        isError: false,
    });

    const fetch = (data: P) => {
        setState({
            data: null,
            error: null,
            isLoading: true,
            isSuccess: false,
            isInitializd: true,
            isError: false,
        });
        request(data)
            .then(data => {
                setState({
                    data,
                    error: null,
                    isLoading: false,
                    isSuccess: true,
                    isInitializd: true,
                    isError: false,
                });
            })
            .catch(error => {
                setState({
                    data: null,
                    error,
                    isLoading: false,
                    isSuccess: false,
                    isInitializd: true,
                    isError: true,
                });
            });
    };

    return [fetch, state] as const;
};
