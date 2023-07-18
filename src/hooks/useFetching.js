import { useState } from "react";


// Хук, який обробляє відображженя спінера, та смс помилки
// (фукнція запиту на сервер.)
const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)

        }
    }

    //Повертаємо помилку, завантажження? та помилку
    return [fetching, isLoading, error]
}
export default useFetching;