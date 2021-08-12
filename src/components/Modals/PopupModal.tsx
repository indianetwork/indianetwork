import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'

interface Props {
    children?: React.ReactNode
    label: string
    id: string
    primary: boolean
    className: string
}

const PopupModal: React.FC<Props> = ({ label, primary, children, id, className, ...props }: Props) => {
    const [popupModalVisible, setPopupModalVisible] = useState(false);
    
    function modalShow() {
        setPopupModalVisible(true);
    }

    function modalHide() {
        setPopupModalVisible(false);
    }
    

    return (
        <>
            <button className={className} onClick={modalShow}>
                {label}
            </button>
            {popupModalVisible ?
                <div className="modal show" tabindex="-1" role="dialog" id={id}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={modalHide} >&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
            
        </>
    
    )
}

export default PopupModal
