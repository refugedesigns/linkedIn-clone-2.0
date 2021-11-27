import ConnectionsItem from "../UI/ConnectionsItem"

const SuggestedPeople = ({userData}) => {
    return (
        <div className="bg-white mt-4 max-w-screen-sm rounded-lg mx-auto">
            <p className="p-4 font-semibold text-lg">People you may know</p>
            {userData.slice(6, 10).map(user => (
            
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

export default SuggestedPeople
