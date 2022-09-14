import { useState, useCallback } from "react";

const useAsync = asyncFunction => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(() => {
        setLoading(true);
        setData(null);
        setError(null);

        return asyncFunction()
            .then((response) => {
                // 请求成功时，将数据写进 state，设置 loading 为 false
                setData(response);
                setLoading(false);
            })
            .catch((error) => {
                // 请求失败时，设置 loading 为 false，并设置错误状态
                setError(error);
                setLoading(false);
            });
    }, [asyncFunction])

    return [execute, data, loading, error]
}

export default useAsync
