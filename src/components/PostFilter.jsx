import MainSelect from "./UI/select/MainSelect";
import MainInput from "./UI/input/MainInput";
import MainButton from "./UI/button/MainButton";


const PostFilter = ({ filter, setFilter }) => {

    return (
        <>

            <MainInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Поиск"
            />


            {/*  Сортировка с применением управляемого селекта */}
            <MainSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
            <MainButton
                onClick={() => setFilter({ ...filter, query: '' })}>
                Очистить строку
            </MainButton>
        </>
    )
}
export default PostFilter;