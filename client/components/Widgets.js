import FeedWidget from "./Widgets/FeedWidget"
import JobWidget from "./Widgets/JobWidget"
import AddsWidget from "./Widgets/AddsWidget"


const Widgets = () => {
    return (
        <div className="max-w-screen-sm mx-auto sm:px-8 md:px-0 md:mx-0 lg:mt-10 md:max-w-lg ">
            <FeedWidget />
            <JobWidget />
            <AddsWidget />
        </div>
    )
}

export default Widgets
