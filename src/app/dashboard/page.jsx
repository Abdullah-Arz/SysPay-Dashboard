import React from "react";
import DashboardLayout from "../components/DashboardLayout/page";
import Dashboard_Card from "../components/dashboard_cards/page";
import DashboardlineChart from '../components/dashboard_linechart/page';
import DashboardColumnChart from '../components/dashboard_columnchart/page';
import DashboardAreaChart from '../components/dashboard_areachart/page';
import DashboardTargetChart from '../components/dashboard_targetchart/page';

import TopProduct from '../components/top_product/page';
import MappingChart from '../components/dashboard_mappingchart/page';
import VolumnChart from '../components/dashboard_volumnchart/page';

function Page() {
    return (
        <DashboardLayout>
            <>
                {/* First Grid: Two Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
                    <div className="h-full w-full md:w-[55%] lg:w-[55%]">
                        <Dashboard_Card />
                    </div>
                    <div className="h-full shadow-md bg-white rounded-2xl p-4 md:w-[45%] lg:w-[45%]">
                        <DashboardlineChart />
                    </div>
                </div>

                {/* Second Grid: Three Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[38%] lg:w-[38%]">
        <DashboardColumnChart />
    </div>
    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[31%] lg:w-[31%]">
        <DashboardAreaChart />
    </div>
    <div className="shadow-md bg-white rounded-2xl p-4 w-full md:w-[31%] lg:w-[31%]">
        <DashboardTargetChart />
    </div>
</div>

                {/* Third Grid: Three Columns */}
                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 mt-4 justify-between">
                    <div className="h-full w-full md:w-[38%] lg:w-[38%]">
                        <TopProduct />
                    </div>
                    <div className="h-full w-full md:w-[31%] lg:w-[31%]">
                        <MappingChart />
                    </div>
                    <div className="h-full w-full md:w-[31%] lg:w-[31%]">
                        <VolumnChart />
                    </div>
                </div>
            </>
        </DashboardLayout>
    );
}

export default Page;
