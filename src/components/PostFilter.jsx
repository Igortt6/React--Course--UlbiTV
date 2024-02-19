import MainButton from './UI/button/MainButton'
import MainInput from './UI/input/MainInput'
import MainSelect from './UI/select/MainSelect'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
				<MainInput
					value={filter.query}
					onChange={e => setFilter({ ...filter, query: e.target.value })}
					placeholder='Google...'
				/>
				<MainButton onClick={() => setFilter({ query: '' })}>Clear</MainButton>
			</div>
			<MainSelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='sort by'
				options={[
					{ value: 'title', name: 'By name' },
					{ value: 'body', name: 'By text' },
				]}
			/>
		</div>
	)
}
export default PostFilter
