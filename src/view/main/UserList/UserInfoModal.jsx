import { Modal } from "antd";
import useUser from "./useUser";

function UserInfoModal ({visible, userId, ...rest}) {
    const { data: user, error } = useUser(userId);

    return (
        <Modal visible={visible} className="exp-10-user-info-modal" {...rest}>
            {error && "Fetch failed."}
            {
                user? (
                    <div className="exp-10-user-info-modal">
                        <label>{user.name}</label>
                        <p>{user.introduction}</p>
                    </div>
                ): (
                    "Loading..."
                )
            }
        </Modal>
    )
    
}

export default function UserInfoModalWrapper ({ visible, ...rest }) {
    if(!visible) return null
    return <UserInfoModal visible {...rest} />
}
