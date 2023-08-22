import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker"
import { DashNav } from "@/components/dashboard/dash-nav"
import { Search } from "@/components/dashboard/search"
import { UserNav } from "@/components/dashboard/user-nav"
import Image from "next/image"
import dashboard from '@/images/dashboard.png';


export default function AdminCustomersPage() {
    return (
    <>
        <div className="md:hidden">
            <Image
                src={dashboard}
                width={1280}
                height={866}
                alt="Dashboard"
                className="block dark:hidden"
        />
            <Image
                src={dashboard}
                width={1280}
                height={866}
                alt="Dashboard"
                className="hidden dark:block"
            />
        </div>
        <div className="hidden flex-col md:flex">
            <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <DashNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>Download</Button>
            </div>
          </div>
        </div>
        </div>
    </>    
    )
}