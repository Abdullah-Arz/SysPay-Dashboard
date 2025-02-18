import React from "react";
import DashboardLayout from "../components/DashboardLayout/page";
import Dashboard_Card from "../components/dashboard_cards/page";
import VisitorsGraph from '../components/visitorsGraph/page';
import RevenueGraph from '../components/revenueGraph/page';
import SatisfactionGraph from '../components/satisfactionGraph/page';
import SalesGraph from '../components/salesGraph/page';

import TopProduct from '../components/top_product/page';
import MappingGraph from '../components/mappingGraph/page';
import VolumnGraph from '../components/volumnGraph/page';

const Page = () => {
    return (
        <DashboardLayout>
            <>
                {/* First Grid: Two Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
                    <div className="h-full w-full md:w-[55%] lg:w-[55%]">
                        <Dashboard_Card />
                    </div>
                    <div className="h-full shadow-md bg-white rounded-2xl p-4 md:w-[45%] lg:w-[45%]">
                        <VisitorsGraph />
                    </div>
                </div>

                {/* Second Grid: Three Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
                    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[38%] lg:w-[38%]">
                        <RevenueGraph />
                    </div>
                    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[31%] lg:w-[31%]">
                        <SatisfactionGraph />
                    </div>
                    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[31%] lg:w-[31%]">
                        <SalesGraph />
                    </div>
                </div>

                {/* Third Grid: Three Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
                    <div className="h-full w-full md:w-[38%] lg:w-[38%]">
                        <TopProduct />
                    </div>
                    <div className="h-full w-full md:w-[31%] lg:w-[31%]">
                        <MappingGraph />
                    </div>
                    <div className="h-full w-full md:w-[31%] lg:w-[31%]">
                        <VolumnGraph />
                    </div>
                </div>
            </>
        </DashboardLayout>
    );
}

export default Page;
