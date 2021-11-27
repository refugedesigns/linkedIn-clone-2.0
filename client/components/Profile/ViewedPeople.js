import ConnectionsItem from "../UI/ConnectionsItem"


const ViewedPeople = ({userData}) => {

    return (
        <div className="bg-white mt-4 pb-4 max-w-screen-sm rounded-lg mx-auto">
            <p className="p-4 font-semibold text-lg">People also viewed</p>
            {userData.slice(0, 5).map(user => (
            
            <ConnectionsItem 
            key={user.id} 
            title={user.title}
            firstName={user.firstName}
            lastName={user.lastName}
            picture={user.picture}
            />
            
            ))}
        </div>
    )
}

export default ViewedPeople
