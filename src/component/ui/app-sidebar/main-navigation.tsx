'use client'
import {
  LayoutDashboard,
  Activity,
  Users,
  UserCog,
  Briefcase,
  FileText,
  DollarSign,
  Percent,
  Award,
  BarChart,
  Calendar,
  Clock,
  CheckSquare,
  UserCheck,
  ClipboardList,
  Contact,
  UserPlus,
  Target,
  PieChart,
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  LineChart,
  BarChart2,
  Layers,
  Building,
  Settings,
  Shield,
  FileSpreadsheet,
  FileText as FileTextIcon,
  User,
  UserCircle,
  Database,
  Tag,
  MessageSquare,
  Bell,
  Folder,
  Plus,
  File,
  Eye
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavItem } from "./nav-item";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import ROUTES from "@/routes";

// Navigation items factory that uses translations
const getNavItems = (t: ReturnType<typeof useTranslations>) => [
  // {
  //   title: t('dashboard'),
  //   icon: LayoutDashboard,
  //   items: [
  //     { title: t('overview'), icon: LayoutDashboard, href: "/dashboard/overview" },
  //     { title: t('activityFeed'), icon: Activity, href: "/dashboard/activity" }
  //   ]
  // },
  {
    title: t('userManagement'),
    icon: Users,
    items: [
      
      // {
      //   title: t('userTypes'), icon: UserCog, items: [
      //     { title: t('marketingUsers'), icon: Target, href: "/users/marketing" },
      //     { title: t('salesUsers'), icon: TrendingUp, href: "/users/sales" },
      //     { title: t('technicalUsers'), icon: BarChart, href: "/users/technical" },
      //     { title: t('generalUsers'), icon: User, href: "/users/general" }
      //   ]
      // },
      // { title: t('userProfiles'), icon: UserCircle, href: "/users/profiles" },
      // { title: t('userPermissions'), icon: Shield, href: "/users/permissions" },
      { title: t('teams.title'), icon: Users, href: ROUTES.TEAMS },
      // { title: t('wfm.teamDetails'), icon: Users, href: ROUTES.TEAMS_DETAILS }

    ]
  },
      { title: t('hrManagement'),
      icon: Briefcase,
      items: [
        { title: t('basicList') , icon: DollarSign, href: ROUTES.BASIC_LIST },
        { title: t('purposes.title'), icon: FileText, href: ROUTES.HR_PURPOSES },
        { title: t('attendanceRecords'), icon: ClipboardList, href: ROUTES.ATTENDANCE },
        { title: t('deductions.title'), icon: DollarSign, href: ROUTES.USERS_DEDUCTIONS },
      // { title: t('basicSalaries'), icon: DollarSign, href: "/hr/salaries" },
      // { title: t('employeeRecords'), icon: FileText, href: "/hr/employees" },
      // { title: t('contractsDocuments'), icon: FileTextIcon, href: "/hr/documents" },

    ]
  },
  // {
  //   title: t('commissionSystem'),
  //   icon: Percent,
  //   items: [
  //     { title: t('commissionRecords'), icon: Database, href: "/commissions/records" },
  //     {
  //       title: t('commissionTypes'), icon: Tag, items: [
  //         { title: t('salesCommissions'), icon: DollarSign, href: "/commissions/sales" },
  //         { title: t('technicalCommissions'), icon: Percent, href: "/commissions/technical" },
  //         { title: t('bonusCalculations'), icon: Award, href: "/commissions/bonus" }
  //       ]
  //     },
  //     { title: t('commissionReports'), icon: BarChart, href: "/commissions/reports" }
  //   ]
  // }, 
  {
    title: t('leaveAttendance'),
    icon: Calendar,
    items: [
      { title: t('requestsManagement'), icon: ClipboardList, href: ROUTES.ATTENDANCE_REQUESTS },
      { title: t('approvalWorkflow'), icon: CheckSquare, href: ROUTES.ATTENDANCE_APPROVALS },
      { title: t('attendanceRecords'), icon: ClipboardList, href: ROUTES.ATTENDANCE },
      // { title: t('leaveBalance'), icon: BarChart2, href: "/attendance/leave-balance" },
      { title: t('advances.title'), icon: DollarSign, href: ROUTES.ATTENDANCE_ADVANCES }
    ]
  },
  {
    title: t('crmLeads'),
    icon: Contact,
    items: [
      { title: t('leadsManagement'), icon: UserPlus, href: ROUTES.LEADS },
      { title: t('allLeads'), icon: Users, href: ROUTES.LEADS },
      // { title: t('newLeads'), icon: UserPlus, href: "/dashboard/leads" },
      { title: t('assignedLeads'), icon: UserCheck, href: ROUTES.LEADS_ASSIGN },
      // { title: t('leadSources'), icon: Target, href: "/crm/leads/sources" },
      // { title: t('leadStatus'), icon: Layers, href: "/crm/leads/status" }
    ]
  },
  // {
  //   title: t('salesPipeline'),
  //   icon: TrendingUp,
  //   items: [
  //     {
  //       title: t('dealsManagement'), icon: Briefcase, items: [
  //         { title: t('allDeals'), icon: Briefcase, href: "/sales/deals/all" },
  //         { title: t('activeDeals'), icon: TrendingUp, href: "/sales/deals/active" },
  //         { title: t('wonDeals'), icon: ThumbsUp, href: "/sales/deals/won" },
  //         { title: t('lostDeals'), icon: ThumbsDown, href: "/sales/deals/lost" }
  //       ]
  //     },
  //     { title: t('dealStages'), icon: Layers, href: "/sales/stages" },
  //     { title: t('salesPerformance'), icon: BarChart, href: "/sales/performance" }
  //   ]
  // },
  {
    title: t('stockRecommendations'),
    icon: LineChart,
    items: [
      { title: t('recommendationsManagement'), icon: LineChart, href: ROUTES.STOCK_RECOMMENDATIONS },
      // { title: t('saudiMarketStocks'), icon: BarChart2, href: "/stocks/saudi-market" },
      // { title: t('successAnalytics'), icon: PieChart, href: "/stocks/analytics" },
      // { title: t('commissionCalculation'), icon: Percent, href: "/stocks/commissions" }
    ]
  },
  // {
  //   title: t('technicalUsers'),
  //   icon: User,
  //   items: [
  //     // { title: t('allUsers'), icon: Users, href: "/technical-users/stock-recommendations" },
  //     // { title: t('userProfiles'), icon: UserCircle, href: "/technical-users/profiles" },
  //     // { title: t('recommendationsManagement'), icon: LineChart, href: "/technical-users/stock-recommendations" },
  //   ]
  // },
  // {
  //   title: t('reportsAnalytics'),
  //   icon: BarChart,
  //   items: [
  //     {
  //       title: t('financialReports'), icon: DollarSign, items: [
  //         { title: t('salaryReports'), icon: FileSpreadsheet, href: "/reports/financial/salaries" },
  //         { title: t('commissionReports'), icon: Percent, href: "/reports/financial/commissions" },
  //         { title: t('revenueAnalytics'), icon: BarChart, href: "/reports/financial/revenue" }
  //       ]
  //     },
  //     {
  //       title: t('performanceReports'), icon: Award, items: [
  //         { title: t('userPerformance'), icon: User, href: "/reports/performance/users" },
  //         { title: t('teamPerformance'), icon: Users, href: "/reports/performance/teams" },
  //         { title: t('recommendationSuccess'), icon: ThumbsUp, href: "/reports/performance/recommendations" }
  //       ]
  //     },
  //     {
  //       title: t('hrReports'), icon: Briefcase, items: [
  //         { title: t('attendanceReports'), icon: Clock, href: "/reports/hr/attendance" },
  //         { title: t('leaveReports'), icon: Calendar, href: "/reports/hr/leave" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: t('projects'),
  //   icon: Folder,
  //   items: [
  //     { title: t('allProjects'), icon: Folder, href: "/projects" },
  //     // { title: t('createProject'), icon: Plus, href: "/projects" }, // This will open the modal on the projects page
  //     // { title: t('projectReports'), icon: File, href: "/projects/reports" }
  //   ]
  // },
  // {
  //   title: t('departments'),
  //   icon: Building,
  //   items: [
  //     { title: t('allDepartments'), icon: Folder, href: "/departments" },
  //     // { title: t('createProject'), icon: Plus, href: "/departments" }, // This will open the modal on the departments page
  //     // { title: t('projectReports'), icon: File, href: "/departments/reports" }
  //   ]
  // },
  {
    title: t('systemSettings'),
    icon: Settings,
    items: [
      { title: t('allProjects'), icon: Folder, href: ROUTES.PROJECTS },
      { title: t('allDepartments'), icon: Building, href: ROUTES.DEPARTMENTS },
      // { title: t('userRoles'), icon: Shield, href: "/settings/roles" },
      // { title: t('salaryStructures'), icon: DollarSign, href: "/settings/salaries" },
      // { title: t('commissionRules'), icon: Percent, href: "/settings/commissions" },
      // { title: t('approvalWorkflows'), icon: CheckSquare, href: "/settings/workflows" },
      // { title: t('departmentSettings'), icon: Building, href: "/settings/departments" }
    ]
  },
  // ── WFM (Workforce Management) groups ──────────────────────────────
  {
    title: t('wfm.usersAdmin'),
    icon: UserCog,
    items: [
      { title: t('allUsers'), icon: Users, href: ROUTES.USERS },
      { title: t('wfm.addUser'), icon: UserPlus, href: ROUTES.ADD_USER },
      { title: t('wfm.usersList'), icon: Users, href: ROUTES.USERS_LIST },
      { title: t('wfm.devicesAccess'), icon: Shield, href: ROUTES.DEVICES_ACCESS },
      { title: t('wfm.profile'), icon: UserCircle, href: ROUTES.PROFILE },
    ]
  },
  {
    title: t('wfm.attendanceHr'),
    icon: Clock,
    items: [
      { title: t('wfm.lateUsers'), icon: ClipboardList, href: ROUTES.ATTENDANCE_DETAILS },
      { title: t('wfm.attendanceDetails'), icon: Clock, href: ROUTES.ATTENDANCE_DETAILS_LATED },
      { title: t('wfm.requests'), icon: ClipboardList, href: ROUTES.REQUESTS },
      { title: t('wfm.actionPlans'), icon: FileText, href: ROUTES.ACTION_PLANS },
      { title: t('wfm.myActionPlans'), icon: FileText, href: ROUTES.MY_ACTION_PLANS },
    ]
  },
  {
    title: t('wfm.salaries'),
    icon: DollarSign,
    items: [
      { title: t('wfm.basic'), icon: DollarSign, href: ROUTES.BASIC },
      { title: t('wfm.salaryAll'), icon: DollarSign, href: ROUTES.SALARY_ALL },
      { title: t('wfm.salaryMarketing'), icon: Target, href: ROUTES.SALARY_MARKETING },
      { title: t('wfm.salarySales'), icon: TrendingUp, href: ROUTES.SALARY_SALES },
      { title: t('wfm.salaryTechnical'), icon: BarChart, href: ROUTES.SALARY_TECHNICAL },
      { title: t('wfm.salaryGeneral'), icon: User, href: ROUTES.SALARY_GENERAL },
      { title: t('wfm.mySalary'), icon: DollarSign, href: ROUTES.MY_SALARY_LIST },
      { title: t('wfm.salaryHistory'), icon: FileSpreadsheet, href: ROUTES.SALARY_HISTORY },
    ]
  },
  {
    title: t('wfm.finance'),
    icon: DollarSign,
    items: [
      { title: t('wfm.treasury'), icon: DollarSign, href: ROUTES.TREASURY },
      { title: t('wfm.treasuryProjects'), icon: PieChart, href: ROUTES.TREASURY_PROJECTS },
      { title: t('wfm.advances'), icon: DollarSign, href: ROUTES.ADVANCES },
      { title: t('wfm.coinChanger'), icon: Percent, href: ROUTES.COIN_CHANGER },
    ]
  },
  {
    title: t('wfm.marketing'),
    icon: BarChart2,
    items: [
      { title: t('wfm.marketingDashboard'), icon: PieChart, href: ROUTES.DASHBOARD_MARKET },
      { title: t('wfm.reports'), icon: FileText, href: ROUTES.REPORTS },
      { title: t('wfm.addReport'), icon: Plus, href: ROUTES.ADD_REPORT_SOCIAL },
      { title: t('wfm.oldLead'), icon: Contact, href: ROUTES.OLD_LEAD },
      { title: t('wfm.notifications'), icon: Bell, href: ROUTES.NOTIFICATIONS },
    ]
  },
  {
    title: t('wfm.communication'),
    icon: MessageSquare,
    items: [
      { title: t('wfm.whatsappAccounts'), icon: MessageSquare, href: ROUTES.WHATSAPP_ACCOUNTS },
      { title: t('wfm.whatsappWeb'), icon: MessageSquare, href: ROUTES.WHATSAPP_WEB },
    ]
  }
];

interface MainNavigationProps {
  isCollapsed: boolean;
}

export function MainNavigation({ isCollapsed }: MainNavigationProps) {
  const t = useTranslations("navigation");
  const navItems = useMemo(() => getNavItems(t), [t]);
  return (
    <SidebarGroup className="overflow-auto">
      <SidebarGroupContent>
        <SidebarMenu className="gap-4">
          {navItems.map((item) => (
            <NavItem key={item.title?.toString()} item={item} isCollapsed={isCollapsed} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}