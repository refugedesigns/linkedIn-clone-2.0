import { AssignmentTurnedInOutlined, Bookmark, Description, DescriptionOutlined, EditOutlined, Money, Notifications, Settings } from "@material-ui/icons"

const JobMenuItems = () => {
    return (
        <div className="h-80 md:sticky md:top-12">
            <div className="bg-white mt-6 p-4 pr-2 w-46 space-y-6 border rounded-lg">
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <Bookmark />
                    <p className="text-sm font-semibold">My Jobs</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <Notifications />
                    <p className="text-sm font-semibold">Job Alerts</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <Money />
                    <p className="text-sm font-semibold">Salary</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <AssignmentTurnedInOutlined />
                    <p className="text-sm font-semibold whitespace-nowrap">Skill Assessments</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <Description />
                    <p className="text-sm font-semibold">Interview Prep</p> 
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <DescriptionOutlined />
                    <p className="text-sm font-semibold">Resume Builder</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <Settings />
                    <p className="text-sm font-semibold whitespace-nowrap">Application Settings</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 cursor-pointer mt-4 bg-white p-4 border rounded-lg">
                <EditOutlined />
                <p className="text-sm font-semibold">Post a free job</p>
            </div>
        </div>
    )
}

export default JobMenuItems
