import { PermScanWifi } from "@material-ui/icons"
import { ArrowNarrowRightIcon } from "@heroicons/react/solid"
import Element from "../Layout/Element"

import { grey } from "@material-ui/core/colors"

const ELEMENTS = [
    {
        title: "freeCodeCamp",
        except: "Company - E-learning",
        image: "/images/freecode.jpg",
        alt: "freeCodeCamp"
    },
    {
        title: "Bill Gates",
        except: "Co-chair, Bill & Melinda Gates Foundation",
        image: "/images/Microsoft.png",
        alt: "Microsoft"
    },
    {
        title: "JavaScript",
        except: "Company - E-learning",
        image: "/images/JavaScript.png",
        alt: "JavaScript"
    },
]


const FeedWidget = () => {
    return (
        <div className="bg-white my-3 border-t border-b mx-auto sm:rounded-lg md:mx-0 lg:w-72">
            <div className="flex justify-between pt-4 px-4">
                <h3 className="font-semibold"> Add to your feed</h3>
                <PermScanWifi className="hover:cursor-pointer" style={{color: grey[500]}} />
            </div>
            {ELEMENTS.map(element => (
                <Element key={element.alt}
                title={element.title}
                except={element.except}
                src={element.image}
                alt={element.alt}
                />
            ))}
            <div className="flex items-center mt-8 mb-4 ml-4 p-1 w-min hover:hover-class">
                <p className="whitespace-nowrap text-sm font-semibold mr-4 text-gray-500">View all recommendations</p>
                <ArrowNarrowRightIcon className="h-5 text-gray-500" />
            </div>
        </div>
    )
}

export default FeedWidget
