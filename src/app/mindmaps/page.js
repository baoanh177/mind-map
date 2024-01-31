import { getSession } from "@auth0/nextjs-auth0"
import Header from "../components/Header"
import HeaderInfo from "../components/HeaderInfo"
import AddFlowModal from "./components/AddFlowModal"
import { getAllFlows } from "./actions/getAllFlows"
import Flows from "./components/Flows"

async function MindmapPage() {
    const userSession = await getSession()
    const { sub: userId } = userSession.user
    const { data } = await getAllFlows()
    const flows = data.filter(flow => flow.user_id == userId)

    return (
        <>
            <Header>
                <HeaderInfo/>
            </Header>
            <div className="px-20 py-24 min-h-[calc(100vh)]">
                <div className="flex gap-5 items-center">
                    <span className="text-2xl font-bold">
                        Mindmaps
                    </span>
                    <AddFlowModal userId={userId} />
                </div>
                <div className="my-5">
                    <Flows flows={flows} />
                </div>
            </div>
        </>
    )
}

export default MindmapPage
