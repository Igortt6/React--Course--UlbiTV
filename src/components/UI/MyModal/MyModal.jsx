import cl from './MyModal.module.scss'

const MyForm = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.modal]

    // добавление класса active
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => { setVisible(false) }} >
            <div className={cl.container} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div >
    )
}
export default MyForm;