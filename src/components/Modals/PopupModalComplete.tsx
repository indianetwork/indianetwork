import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'

interface Props {
    children?: React.ReactNode
    path: string
    label: string
    primary: boolean
}

const PopupModal: React.FC<Props> = ({ path, label, primary, children, ...props }: Props) => {
    const [popupModalVisible, setPopupModalVisible] = useState(false);
    
    function modalShow() {
        setPopupModalVisible(true);
    }

    function modalHide() {
        setPopupModalVisible(false);
    }
    

    return (
        <>
            <button className="popup-modal-btn" onClick={modalShow}>
                <strong>{label}</strong>
            </button>
            <div className="modal modal-complete" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={modalHide} >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}

export default PopupModal
