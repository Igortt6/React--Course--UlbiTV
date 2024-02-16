import MainButton from '../button/MainButton'
import cl from './Popup.module.scss'

const Popup = ({ children, visible, setVisible }) => {
	const rootClasses = [cl.popup]
	if (visible) {
		rootClasses.push(cl.popupShow)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className='wrapper' onClick={e => e.stopPropagation()}>
				<div className={cl.content}>
					<MainButton onClick={() => setVisible(false)}>Close</MainButton>
					<div className={cl.text}>{children}</div>
				</div>
			</div>
		</div>
	)
}
export default Popup
