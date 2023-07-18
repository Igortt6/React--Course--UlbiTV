import { useMemo, useState } from "react";

const usePagination = (totalPage) => {
    const pagesArray = useMemo(() => {
        let arr = []
        for (let i = 1; i <= totalPage; i++) {
            arr.push(i);
        }
        return arr
    }, [totalPage])

    return pagesArray;
}
export default usePagination;